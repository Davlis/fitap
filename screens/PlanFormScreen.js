import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

import PlanFormSection from '../sections/PlanForm/PlanFormSection'
import TrainingFormSection from '../sections/PlanForm/TrainingFormSection'
import Registry from '@davlis/registry'

const STEPS = {
  AddPlanInformation: 0,
  AddTrainingInformation: 1
}

const defaultPayload = {
  plan: {},
  trainings: []
}

export default function PlanFormScreen({ navigation }) {
  const [payload, setPayload] = useState({ ...defaultPayload })
  const [formStep, setFormStep] = useState(STEPS.AddPlanInformation);

  handlePlanFormSubmit = (values) => {
    setPayload({ ...payload, plan: { ...values }})
    setFormStep(formStep + 1)
  }

  handleAddNextTrainingStep = (values) => {
    const trainings = [ ...payload.trainings ]

    if (trainings[formStep - 1]) {
      trainings[formStep - 1] = { ...values }
    } else {
      trainings.push({ ...values })
    }
  
    setPayload({ ...payload, trainings })
    setFormStep(formStep + 1)
  }

  handleFinish = () => {
    const ApiService = Registry.get('ApiService')

    ApiService.post('/plans', payload)
      .then(result => {
        // handle result propagation here
        console.log('result', result)
        navigation.navigate('PlanList')
      }).catch(error => {
        // handle error here
        console.log('error', error)
      })
  }

  handleBack = () => {
    setFormStep(formStep - 1)
  }

  const FormContent = (props) => formStep === STEPS.AddPlanInformation ? 
  <View style={styles.formContainer}>
    <MonoText style={styles.title}>Plan basic information</MonoText>
    <PlanFormSection 
      onSubmit={handlePlanFormSubmit}
      values={ {...payload.plan} }
      {...props} />
  </View>
  : <View style={styles.formContainer}>
      <MonoText style={styles.title}>Training #{formStep} details</MonoText>
      <TrainingFormSection 
        onSubmit={handleAddNextTrainingStep}
        onFinish={handleFinish}
        onBack={handleBack}
        values={ {...payload.trainings[formStep - 1]} }
        {...props} />
    </View>

  return (
    <ScrollView style={styles.container}>
      <FormContent />
    </ScrollView>
  );
}

PlanFormScreen.navigationOptions = {
  title: 'Create plan',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30
  }
});
