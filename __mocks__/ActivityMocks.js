const STATUSES = {
  STARTED: 'STARTED',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
}

const LastActivities = {
  activities: {
    count: 2,
    activities: [{
      id: 'activity-1',
      trainingId: 'training-1',
      planId: 'plan-1',
      excersises: {
        count: 3,
        excersises: [{
          id: 'excersise-1',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }, {
          id: 'excersise-2',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }, {
          id: 'excersise-3',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }]
      },
      status: STATUSES.FINISHED,
      startedAt: '12-07-2019 14:20',
      finishedAt: '12-07-2019 14:50',
    }, {
      id: 'activity-2',
      trainingId: 'training-2',
      planId: 'plan-1',
      excersises: {
        count: 3,
        excersises: [{
          id: 'excersise-1',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }, {
          id: 'excersise-2',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }, {
          id: 'excersise-3',
          name: 'Squat',
          series: {
            count: 4,
            series: [{
              power: 100,
              weight: 10,
              repetitions: 10,
              sequence: 1,
            }, {
              power: 200,
              weight: 20,
              repetitions: 10,
              sequence: 2,
            }, {
              power: 300,
              weight: 30,
              repetitions: 10,
              sequence: 3,
            }, {
              power: 200,
              weight: 40,
              repetitions: 5,
              sequence: 4
            }],
            weights: [10, 20, 30, 40],
            repetitions: [10, 10, 10, 5],
            powers: [100, 200, 300, 200]
          }
        }]
      },
      status: STATUSES.FINISHED,
      startedAt: '12-08-2019 14:20',
      finishedAt: '12-08-2019 14:50',
    }]
  }
}

export {
  LastActivities,
  STATUSES
}
