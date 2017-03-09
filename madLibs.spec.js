describe("infoFactory",function(){
  beforeEach(module("Lab15"));
  var infoFactory;
  beforeEach(inject(function(_infoFactory_){
    infoFactory=_infoFactory_;
  }));
   it("returns userInfo",function(){
     var value="Hello";
     infoFactory.sentInfo(value);
     expect(infoFactory.getInfo()).toBe("Hello");
   });
 });
