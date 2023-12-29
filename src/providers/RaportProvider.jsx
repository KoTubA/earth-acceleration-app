import React, { useState, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import PDFTemplate from 'src/components/templates/PDFTemplate';

// Function to calculate gravitational acceleration (g) and period (T)
const calculateTAndG = (inputValue, n, lengthLResult) => {
  const T = parseFloat(inputValue) / n;
  const g = (4 * Math.PI ** 2 * lengthLResult) / T ** 2;
  return { T, g };
};

// Function to calculate the length of the pendulum with a ball (l0)
const calculateLengthWithBall = (length, diameter) => length + diameter / 2;

// Initial state for input values
const initialState = {
  lengthL: '',
  diameter: '',
  20: { 'smallInput-20': '', 'mediumInput-20': '', 'largeInput-20': '' },
  30: { 'smallInput-30': '', 'mediumInput-30': '', 'largeInput-30': '' },
  50: { 'smallInput-50': '', 'mediumInput-50': '', 'largeInput-50': '' },
};

// Reducer for handling input value changes and form reset
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'SET_PERIOD_DATA':
      return {
        ...state,
        [action.n]: {
          ...state[action.n],
          [action.id]: action.value,
        },
      };
    case 'RESET_FORM':
      console.log('Form reset!');
      return initialState;

    default:
      return state;
  }
};

// Initial state for result calculations
const initialResult = {
  lengthLResult: '',
  20: {
    'small-20': { T: '-', g: '-' },
    'medium-20': { T: '-', g: '-' },
    'large-20': { T: '-', g: '-' },
  },
  30: {
    'small-30': { T: '-', g: '-' },
    'medium-30': { T: '-', g: '-' },
    'large-30': { T: '-', g: '-' },
  },
  50: {
    'small-50': { T: '-', g: '-' },
    'medium-50': { T: '-', g: '-' },
    'large-50': { T: '-', g: '-' },
  },
  Avg: {
    'small-Avg': { T: '-', g: '-' },
    'medium-Avg': { T: '-', g: '-' },
    'large-Avg': { T: '-', g: '-' },
  },
};

// Reducer for handling result calculations and saving
const resultReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONCLUSIONS_VALUE':
      return {
        ...state,
        conclusions: action.value,
      };
    case 'CALCULATE_RESULT':
      console.log('Updated result');
      return {
        ...state,
        currentResult: {
          ...action.result,
        },
      };

    case 'UPDATE_RESULT':
      console.log('Result update');
      return {
        ...state,
        history: state.history.filter((_, index) => index !== action.index),
      };

    case 'SAVE_RESULT':
      console.log('Result saved');
      return {
        conclusions: state.conclusions,
        currentResult: initialResult,
        history: [...state.history, state.currentResult],
      };

    case 'EXPORT_TO_PDF':
      console.log('Export to PDF clicked!');
      return {
        currentResult: initialResult,
        history: [],
        conclusions: '',
      };

    default:
      return state;
  }
};

export const RaportContext = React.createContext({
  inputValues: {},
  resultState: {},
  handleInputChange: () => {},
  handlePeriodDataChange: () => {},
  handleCalculateResult: () => {},
  handleSaveResult: () => {},
  handleDeleteResult: () => {},
  handleConclusionsChange: () => {},
  handleExportToPDF: () => {},
  error: false,
  errormsg: '',
});

const RaportProvider = ({ children }) => {
  const [inputValues, dispatchInput] = useReducer(reducer, initialState);
  const [resultState, dispatchResult] = useReducer(resultReducer, {
    currentResult: initialResult,
    history: [],
    conclusions: '',
  });
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState('');

  let timer;
  const setTimer = () => {
    timer = setTimeout(() => {
      setError(false);
      setErrormsg('');
    }, 7000);
  };

  const dispatchError = useCallback(async (message) => {
    clearTimeout(timer);
    await setError(false);
    await setErrormsg(message);
    await setError(true);
    setTimer();
  }, []);

  // Event handler for input value changes
  const handleInputChange = (e) => {
    dispatchInput({
      type: 'SET_INPUT_VALUE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Event handler for period data changes
  const handlePeriodDataChange = (e) => {
    dispatchInput({
      type: 'SET_PERIOD_DATA',
      n: e.target.name,
      id: e.target.id,
      value: e.target.value,
    });
  };

  // Configurations for periods and sizes
  const periodsConfig = [20, 30, 50];
  const sizes = ['small', 'medium', 'large'];

  const handleCalculateResult = () => {
    // Check if any of the input values is empty
    const isAnyInputEmpty = Object.values(inputValues).some((value) =>
      typeof value === 'object'
        ? Object.values(value).some((innerValue) => innerValue === '')
        : value === '',
    );

    // If any input value is empty, prevent calculation and display an error
    if (isAnyInputEmpty) {
      dispatchError(
        'Uzupełnij wszytkie pola wejściowe przed obliczeniem wyników.',
      );
      return;
    }

    // Check if any of the input values is not a number
    const isAnyInputNotNumber = Object.values(inputValues).some((value) =>
      typeof value === 'object'
        ? Object.values(value).some((innerValue) =>
            isNaN(parseFloat(innerValue)),
          )
        : isNaN(parseFloat(value)),
    );

    // If any input value is not a number, prevent calculation and display an error
    if (isAnyInputNotNumber) {
      dispatchError(
        'Wprowadź poprawne wartości liczbowe przed obliczeniem wyników.',
      );
      return;
    }

    const { lengthL, diameter, ...periods } = inputValues;
    const lengthLResult = calculateLengthWithBall(
      parseFloat(lengthL),
      parseFloat(diameter),
    );

    // Object to store calculated results
    const calculatedResult = {
      lengthLResult,
    };

    // Calculate T and g for each combination of period and size
    periodsConfig.forEach((n) => {
      sizes.forEach((size) => {
        const inputKey = `${size}Input-${n}`;
        const resultKey = `${size}-${n}`;

        // Initialize result object for the current period if not exists
        calculatedResult[n] = calculatedResult[n] || {};

        // Calculate and store T and g in the result object
        calculatedResult[n][resultKey] = calculateTAndG(
          periods[n][inputKey],
          n,
          lengthLResult,
        );
      });
    });

    // Calculate average T and g for each size
    calculatedResult.Avg = {};

    sizes.forEach((size) => {
      calculatedResult.Avg[`${size}-Avg`] = {
        T:
          (calculatedResult[20][`${size}-20`].T +
            calculatedResult[30][`${size}-30`].T +
            calculatedResult[50][`${size}-50`].T) /
          3,
        g:
          (calculatedResult[20][`${size}-20`].g +
            calculatedResult[30][`${size}-30`].g +
            calculatedResult[50][`${size}-50`].g) /
          3,
      };
    });
    dispatchResult({ type: 'CALCULATE_RESULT', result: calculatedResult });
  };

  // Event handler for saving the result
  const handleSaveResult = () => {
    // Check if the current result is equal to the initial result
    const isResultEqualInitial =
      JSON.stringify(resultState.currentResult) ===
      JSON.stringify(initialResult);

    // If the result is not equal to the initial result, proceed with saving
    if (!isResultEqualInitial) {
      dispatchResult({ type: 'SAVE_RESULT' });
      dispatchInput({ type: 'RESET_FORM' });
    } else {
      // Handle the case where the user tries to save without calculating first
      dispatchError('Nie można zapisać wyniku bez wcześniejszego obliczenia.');
    }
  };

  // Event handler for deleting a result from history
  const handleDeleteResult = (index) => {
    dispatchResult({ type: 'UPDATE_RESULT', index });
  };

  // Event handler for changing the 'conclusions' field
  const handleConclusionsChange = (e) => {
    dispatchResult({ type: 'SET_CONCLUSIONS_VALUE', value: e.target.value });
  };

  // Event handler for exporting to PDF
  const handleExportToPDF = async () => {
    // Check if there is at least one element in history and conclusions is not empty
    if (
      resultState.history.length >= 3 &&
      resultState.conclusions.trim() !== ''
    ) {
      const blob = await pdf(
        <PDFTemplate
          history={resultState.history}
          conclusions={resultState.conclusions.trim()}
        />,
      ).toBlob();
      saveAs(blob, 'sprawozdanie.pdf');
      dispatchResult({ type: 'EXPORT_TO_PDF' });
    } else {
      dispatchError(
        'W celu exportu do pliku PDF, należy zapisać przynajmniej 3 wyniki oraz uzupełnić wnioski.',
      );
    }
  };

  return (
    <RaportContext.Provider
      value={{
        inputValues,
        resultState,
        handleInputChange,
        handlePeriodDataChange,
        handleCalculateResult,
        handleSaveResult,
        handleDeleteResult,
        handleConclusionsChange,
        handleExportToPDF,
        error,
        errormsg,
      }}
    >
      {children}
    </RaportContext.Provider>
  );
};

RaportProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RaportProvider;
