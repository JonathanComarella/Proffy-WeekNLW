const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Jonathan Comarella',
        avatar: 'https://avatars0.githubusercontent.com/u/61809297?s=460&u=a479106a0f89e3becf7f78a37f425608bfefc4ac&v=4',
        whatsapp: '991984072',
        bio: 'Professor de matemática financeira'
    }

    classValue = {
        subject: 4,
        cost: '20'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 4,
            time_from: 544,
            time_to: 1581
        }
    ]

  //  await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")

    const selectClassesAndProffys = await db.all (`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "4"
        AND class_schedule.time_from <= "544"
        AND class_schedule.time_to > "544"
    `)


    
})