import React from 'react';
import { View, TextInput, Text, Alert, StyleSheet } from 'react-native'; 
import { FontAwesome } from '@expo/vector-icons';

import * as yup from 'yup'
import { Formik } from 'formik'
import isEmpty from 'lodash/isEmpty'

import { Button, Input } from 'react-native-elements';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required(),
  purpose: yup
    .string()
    .required(),
  difficulty: yup
    .string()
    .required(),
})

const defaultValues = {
  name: '',
  purpose: '',
  difficulty: ''
}

export default function PlanFormSection({ onSubmit, values }) {
  return (
    <Formik
      initialValues={isEmpty(values) ? defaultValues : values}
      validationSchema={validationSchema}
      enableReinitialize={true}
      isInitialValid={true}
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
            value={values.purpose}
            onChangeText={handleChange('purpose')}
            placeholder="Purpose"
            onBlur={() => setFieldTouched('purpose')}
          />
          {touched.purpose && errors.purpose &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.purpose}</Text>
          }

          <Input
            value={values.difficulty}
            onChangeText={handleChange('difficulty')}
            placeholder="Difficulty"
            onBlur={() => setFieldTouched('difficulty')}
          />
          {touched.difficulty && errors.difficulty &&
            <Text style={{ fontSize: 10, color: 'red' }}>{errors.difficulty}</Text>
          }

          <View style={styles.btnContainer}>
            <Button
              title="Next     "
              // type="outline"
              disabled={(touched.name || touched.purpose || touched.difficulty) && !isValid}
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
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: 30,
    marginBottom: 15
  }
});
