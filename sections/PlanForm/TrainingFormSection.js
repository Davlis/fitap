import React, { Fragment } from 'react';
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';

import * as yup from 'yup'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'

import { Button, Input } from 'react-native-elements';

// TODO: Add dynamic form for excersises

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  date: yup
    .string()
    .required(),
  interval: yup
    .string()
    .required(),

  excersise_1: yup.string().required(),
  excersise_2: yup.string(),
  excersise_3: yup.string(),
  excersise_4: yup.string(),
  excersise_5: yup.string()
})

const defaultValues = {
  name: '',
  date: '',
  interval: '',

  excersise_1: '',
  excersise_2: '',
  excersise_3: '',
  excersise_4: '',
  excersise_5: '',
}

const createExcersiseInputs = () => {
  const keys = Object.keys(defaultValues)
  const count = keys.filter(key => key.includes('excersise')).length

  const getName = (idx) => `excersise_${idx + 1}`

  return count.map((_, idx) => (
    <Fragment key={getName(idx)}>
      <Input
        value={values[getName(idx)]}
        onChangeText={handleChange(getName(idx))}
        onBlur={() => setFieldTouched(getName(idx))}
        placeholder={`Excersise #${idx + 1}`}
      />
      {touched[getName(idx)] && errors[getName(idx)] &&
        <Text style={{ fontSize: 10, color: 'red' }}>{errors[getName(idx)]}</Text>
      }
    </Fragment>
  ))
}

export default function TrainingFormSection({ onSubmit, onFinish, onBack, values }) {
  return (
    <Formik
      initialValues={isEmpty(values) ? defaultValues : values}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={values => onSubmit(values)}
    >
      {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
        <View style={styles.container}>
          <Input
            value={values.name}
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="Name"
          />
          {touched.name && errors.name &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
          }

          <Input
            value={values.date}
            onChangeText={handleChange('date')}
            onBlur={() => setFieldTouched('date')}
            placeholder="Date"
          />
          {touched.date && errors.date &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.date}</Text>
          }

          <Input
            value={values.interval}
            onChangeText={handleChange('interval')}
            onBlur={() => setFieldTouched('interval')}
            placeholder="Interval"
          />
          {touched.interval && errors.interval &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.interval}</Text>
          }

          {createExcersiseInputs()}

          <View style={styles.nextBtnContainer}>
            <Button
              title="Next     "
              // type="outline"
              disabled={!isValid}
              onPress={handleSubmit}
              icon={
                <FontAwesome
                  name="arrow-right"
                  size={18}
                  color="white"
                />
              }
              iconRight
            />
          </View>

          <View style={styles.finishBtnContainer}>
            <Button
                title="     Back"
                // type="outline"
                // disabled={!isValid}
                onPress={onBack}
                icon={
                  <FontAwesome
                    name="arrow-left"
                    size={18}
                    color="white"
                  />
                }
              />
          </View>

          <View style={styles.finishBtnContainer}>
            <Button 
              title="Save & Finish"
              onPress={onFinish} 
            />
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  nextBtnContainer: {
    marginTop: 30,
    marginBottom: 5,
  },
  finishBtnContainer: {
    marginTop: 5,
    marginBottom: 10
  }
});