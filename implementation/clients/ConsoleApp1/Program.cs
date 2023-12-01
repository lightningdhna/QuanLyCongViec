using System.Dynamic;
using System.Net.Http.Json;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;
using MQTTnet;
using MQTTnet.Client;

await PublishAsync();
return;


async Task PublishAsync()
{

    using var client = new MqttFactory().CreateMqttClient();
    var mqttClientOptions = new MqttClientOptionsBuilder()
        .WithTcpServer("broker.hivemq.com")
        .Build();

    var a = await client.ConnectAsync(mqttClientOptions, CancellationToken.None);


    while (true)
    {
        Console.WriteLine("nhap du lieu");

        Console.Write("id = ");
        int id = int.Parse(Console.ReadLine());
        Console.Write("packet number = ");
        int packet_no = int.Parse(Console.ReadLine()!);
        Console.Write("temperature = ");
        int temperature = int.Parse(Console.ReadLine()!);
        Console.Write("humidity = ");
        int humidity = int.Parse(Console.ReadLine()!);
        Console.Write("tds = ");
        int tds = int.Parse(Console.ReadLine()!);
        Console.Write("pH = ");
        double pH = double.Parse(Console.ReadLine()!);
        Console.WriteLine("publishing data...");
        object data = new
        {
            id,
            packet_no,
            temperature,
            humidity,
            tds,
            pH
        };
        var jsonString = JsonSerializer.Serialize(data);

        var applicationMessage = new MqttApplicationMessageBuilder()
            .WithTopic("topic1/hung/test_mqtt")
            .WithPayload(Encoding.UTF8.GetBytes(jsonString))
            .Build();

        await client.PublishAsync(applicationMessage, CancellationToken.None);
    }

    await client.DisconnectAsync();
}

