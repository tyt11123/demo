
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
      // Inserts seed entries
      return knex('links').insert([
        {id: 1, url: "https://google.com", title: "Google", tags: '["Search","Apps","Map","News"]'},
        {id: 2, url: "https://hk.yahoo.com/", title: "Yahoo HK", tags: '["Index","News","Search","HK"]'},
        {id: 3, url: "https://www.biglobe.ne.jp/", title: "ビッグローブ", tags: '["Index","Japan"]'},
        {id: 4, url: "https://www.bouncingscout.com", title: "My Project", tags: '["Swearing","Explicit","Offensive","Indecency"]'},
      ]);
    });
};
