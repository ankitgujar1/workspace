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
        Assert.That(n,Is.EqualTo(100));
    }
    [Test]
    public void Test2()
    {
        Program p=new Program();
        var n=p.IsOk();
        // Assert.That(n,Is.EqualTo(false));
        Assert.IsTrue(n);
        // Assert.IsFalse(n);
    }
}