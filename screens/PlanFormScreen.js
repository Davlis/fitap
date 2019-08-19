import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { ExpoLinksView } from '@expo/samples';

import { MonoText } from '../components/StyledText';

import PlanFormSection from '../sections/PlanForm/PlanFormSection'
import TrainingFormSection from '../sections/PlanForm/TrainingFormSection'

const STEPS = {
  AddPlanInformation: 0,
  AddTrainingInformation: 1
}

const defaultPayload = {
  plan: {},
  trainings: []
}

export default function PlanFormScreen() {
  const [payload, setPayload] = useState({ ...defaultPayload })
  const [formStep, setFormStep] = useState(STEPS.AddPlanInformation);

  handlePlanFormSubmit = (values) => {
    console.log('handle plan', values)

    setPayload({ ...payload, plan: { ...values }})
    setFormStep(formStep + 1)
  }

  handleAddNextTrainingStep = (values) => {
    console.log('handle save & next training', values)
  
    setPayload({ ...payload, trainings: payload.trainings.concat(values) })
    setFormStep(formStep + 1)

    console.log(payload)
  }

  handleFinish = (values) => {
    console.log('handle finish', values)
    // TODO: Call API + Refresh
  }

  handleBack = (values) => {
    console.log('handle back', values)
    console.log('hadnle back payload', payload)

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
