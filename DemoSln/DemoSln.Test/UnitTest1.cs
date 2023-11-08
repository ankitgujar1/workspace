namespace DemoSln.Test;
using DemoSln;
public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        Program p=new Program();
        var n=p.GetNum();
        Assert.Pass();
    }
}