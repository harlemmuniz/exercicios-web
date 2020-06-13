const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 6', function () { // Executando */5 de 5 em 5 segundos, ignorou o minuto, às 20 horas, ignorou o dia do mês, o ignorou o mês e colocou domingo (6)
    console.log('Executando Tarefa 1!', new Date().getSeconds()) // Mostra a mensagem, criou a nova data e mostra os segundos
})

setTimeout( function () {
    tarefa1.cancel()
    console.log('Cancelando a Tarefa 1')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule() // Regra de recorrencia
regra.dayOfWeek = [new schedule.Range(1, 6)] // range, nova programação dias da semana, de segunda a domingo
regra.hour = 21 // às 21h
regra.second = 30 // sempre que der o segundo 30

const tarefa2 = schedule.scheduleJob(regra, function () {s
    console.log('Executando a Tarefa 2', new Date().getSeconds())
})