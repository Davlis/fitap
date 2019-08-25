
// Note (interval) : preferred interval (optional field)
// Note (date) : preferred day of week / month
// Note (date + interval) : Use cron

const Plans = {
  plans: [
    {
      id: '2',
      name: 'FBW',
      purpose: 'Gain strength & durability',
      difficulty: 'Advanced',
      trainings: {
        count: 3,
        trainings: [{
          id: 'training-1',
          name: 'Training #1 (Monday)',
          date: 'Monday',
          interval: 'Every Monday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-1',
              name: 'Squat'
            }, {
              id: 'excersise-2',
              name: 'Squat'
            }, {
              id: 'excersise-3',
              name: 'Squat'
            }]
          }
        }, {
          id: 'training-2',
          name: 'Training #2 (Wednesday)',
          date: 'Wednesday',
          interval: 'Every Wednesday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-4',
              name: 'Squat'
            }, {
              id: 'excersise-5',
              name: 'Squat'
            }, {
              id: 'excersise-6',
              name: 'Squat'
            }]
          }
        }, {
          id: 'training-3',
          name: 'Training #3 (Friday)',
          date: 'Friday',
          interval: 'Every Friday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-7',
              name: 'Squat'
            }, {
              id: 'excersise-8',
              name: 'Squat'
            }, {
              id: 'excersise-9',
              name: 'Squat'
            }]
          }
        }]
      },
      createdBy: 'user-1',
      createdAt: '10-05-2018'
    },
    {
      id: '1',
      name: 'Push-Pull',
      purpose: 'Gain strength',
      difficulty: 'Novice',
      trainings: {
        count: 3,
        trainings: [{
          id: 'training-4',
          name: 'Training #1 (Monday)',
          date: 'Monday',
          interval: 'Every Monday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-1',
              name: 'Squat'
            }, {
              id: 'excersise-2',
              name: 'Squat'
            }, {
              id: 'excersise-3',
              name: 'Squat'
            }]
          }
        }, {
          id: 'training-5',
          name: 'Training #2 (Wednesday)',
          date: 'Wednesday',
          interval: 'Every Wednesday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-4',
              name: 'Squat'
            }, {
              id: 'excersise-5',
              name: 'Squat'
            }, {
              id: 'excersise-6',
              name: 'Squat'
            }]
          }
        }, {
          id: 'training-6',
          name: 'Training #3 (Friday)',
          date: 'Friday',
          interval: 'Every Friday',
          excersises: {
            count: 3,
            excersises: [{
              id: 'excersise-7',
              name: 'Squat'
            }, {
              id: 'excersise-8',
              name: 'Squat'
            }, {
              id: 'excersise-9',
              name: 'Squat'
            }]
          }
        }]
      },
      createdBy: 'user-2',
      createdAt: '10-05-2019',
    }
  ]
}

export {
  Plans
}