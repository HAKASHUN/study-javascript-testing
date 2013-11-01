YUI({
  logInclude: {TestRunner: true}
})
  .use('test', 'test-console', function(Y){
    var testCase = new Y.Test.Case({
      name: '加算のテスト',
      testSimple: function() {
        //ポジティブテスト
        Y.Assert.areSame(sum(2, 2), 4, '2+2が4以外になりました');
        Y.Assert.areSame(sum(0, 2), 2, '0+2が2以外になりました');
        Y.Assert.areSame(sum(-2, 2), 0, '-2+2が0以外になりました');
        Y.Assert.areSame(sum(.1,.4),.5, '.1+.4が.5以外になりました');

        //ネガティブテスト
        Y.Assert.areSame(sum(2), null);
        Y.Assert.areSame(sum('1', '2'), null);
        Y.Assert.areSame(sum('asd', 'weoi'), null);
      }
    });

    //テストケースを読み込みます
    Y.Test.Runner.add(testCase);

    (new Y.Test.Console({
      newestOnTop: false
    })).render('#log');

    //実行します
    Y.Test.Runner.run();
  })
