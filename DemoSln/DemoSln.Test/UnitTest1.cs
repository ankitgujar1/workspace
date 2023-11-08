namespace DemoSln.Test;
using DemoSln;
using DemoSln.WebApi.Controllers;
using Microsoft.Extensions.Logging;

public class Tests
{
    WeatherForecastController controllerForecast=null;

    [SetUp]
    public void Setup()
    {
        controllerForecast=new WeatherForecastController(new MockObject());
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

     class Dispossible : IDisposable
    {
        public void Dispose()
        {
            //throw new NotImplementedException();
        }
    }
    public class MockObject : ILogger<WeatherForecastController>
    {
        public IDisposable BeginScope<TState>(TState state)
        {
            return new Dispossible();
            //throw new NotImplementedException();
        }

        public bool IsEnabled(LogLevel logLevel)
        {
            return false;
            //throw new NotImplementedException();
        }

        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception? exception, Func<TState, Exception?, string> formatter)
        {
           // throw new NotImplementedException();
        }

        [Test]
        public void Test3(){
            // WeatherForecastController c=new WeatherForecastController();
            var n=controllerForecast.PostData();
            Assert.That(n,Is.EqualTo(100));
        } 
    }
}