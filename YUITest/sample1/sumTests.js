YUI({
  logInclude: {TestRunner: true}
})
  .use('test', 'test-console', function(Y){
    var testCase = new Y.Test.Case({
      name: '加算のテスト',
      testSimple: function() {
        Y.Assert.areSame(sum(2, 2), 4, '2+2は4でしょう？');
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