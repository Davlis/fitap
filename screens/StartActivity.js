// TODO: Use react-native-collapsible library
// https://github.com/oblador/react-native-collapsible

import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import Registry from '@davlis/registry'

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

export default function PlanFormScreen({ navigation }) {
  const [payload, setPayload] = useState({ ...defaultPayload })
  const [formStep, setFormStep] = useState(STEPS.AddPlanInformation);

  const [isLoading, setLoading] = useState(false);

  handlePlanFormSubmit = (values) => {
    setPayload({ ...payload, plan: { ...values }})
    setFormStep(formStep + 1)
  }

  handleAddNextTrainingStep = (values) => {
    const trainings = _handleTrainingAddition(values)
  
    setPayload({ ...payload, trainings })
    setFormStep(formStep + 1)
  }

  handleFinish = async (values) => {
    setLoading(true)
  
    const trainings = _handleTrainingAddition(values)
    const requestPayload = { ...payload, trainings }

    const ApiService = Registry.get('ApiService')

    try {
      const result = await ApiService.post('/plans', requestPayload)
      console.log('result', result)
      navigation.navigate('PlanList')
    } catch (error) {
      console.log('error', error)
    }

    setLoading(false)
  }

  handleBack = () => {
    setFormStep(formStep - 1)
  }

  _handleTrainingAddition = (values) => {
    const trainings = [ ...payload.trainings ]

    if (trainings[formStep - 1]) {
      trainings[formStep - 1] = { ...values }
    } else {
      trainings.push({ ...values })
    }

    return trainings
  }

  const FormContent = (props) => formStep === STEPS.AddPlanInformation ? 
    <View style={styles.formContainer}>
      <MonoText style={styles.title}>Plan basic information</MonoText>
      <PlanFormSection 
        onSubmit={handlePlanFormSubmit}
        values={ {...payload.plan} }
        {...props} />
    </View> :
    <View style={styles.formContainer}>
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
      <FormContent isLoading={isLoading} />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader}/>}
    </ScrollView>
  );
}

PlanFormScreen.navigationOptions = {
  title: 'Start Activity',
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
  },
  loader: {
    position: 'absolute',
    top: "50%",
    alignSelf: "center",
    transform: [
      { scaleX: 2 },
      { scaleY: 2 }
    ]
  }
});
