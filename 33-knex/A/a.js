const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: 'fruits',
        user: 'alex',
        password: 'alex'
    }
});

const csvReadableStream = require('csv-reader');
const fs = require('fs');

let inputStream = fs.createReadStream('transaction_record.csv','utf-8');
let actions = [];

inputStream.pipe(new csvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
.on('data', (row) => {
    actions.push(row);      //  array 'actions' stores the 8 rows from CSV
})
.on('end', () => {
    let promise1 = [];
    actions.forEach((row) => {
        promise1.push( getCitrusID(row[1]) );       // function getCitrusID make 8 queries to table 'citrus'
    });                                             // for the eight citrus IDs
    Promise.all(promise1).then((citrus_ids) => {    // When all promises finished, the citrus IDs would be
        knex.transaction(async (trx) => {           // stored in the argument array "citrus_ids"
            try {
                for (let i = 0; i < actions.length; i++) {
                    if (actions[i][0] === 'BUY') {
                        await trx('stock')
                        .where('citrus_id',citrus_ids[i])
                        .increment('quantity', actions[i][2]);
                    } else {
                        await trx('stock')
                        .where('citrus_id',citrus_ids[i])
                        .andWhere('quantity','>=',actions[i][2])
                        .decrement('quantity', actions[i][2]);
                    }
                }
                trx.commit;
            } catch (error) {
                console.log(error);
                trx.rollback;
            }
        })
        .then(() => {console.log("Buy and sell done.");})
        .catch((error) => {console.log(error);});
    });
});

async function getCitrusID(citrus) {
    let result = await knex('citrus').where('name',citrus).select('id');
    result = result.map(x => x.id);
    return result[0];
}
