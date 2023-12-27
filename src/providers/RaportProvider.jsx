import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

// Function to calculate the acceleration due to gravity (g)
const calculateGravity = (lengthLResult, period) =>
  (4 * Math.PI ** 2 * lengthLResult) / period ** 2;

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
      // TODO: Add logic for exporting to PDF or any other action you desire
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
});

const RaportProvider = ({ children }) => {
  const [inputValues, dispatchInput] = useReducer(reducer, initialState);
  const [resultState, dispatchResult] = useReducer(resultReducer, {
    currentResult: initialResult,
    history: [],
    conclusions: '',
  });

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

  const handleCalculateResult = () => {
    // Check if any of the input values is empty
    const isAnyInputEmpty = Object.values(inputValues).some((value) =>
      typeof value === 'object'
        ? Object.values(value).some((innerValue) => innerValue === '')
        : value === '',
    );

    // If any input value is empty, prevent calculation and display an error
    if (isAnyInputEmpty) {
      console.log('Please fill in all input fields before calculating.');
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
      console.log(
        'Please enter valid numeric values in all input fields before calculating.',
      );
      return;
    }

    const { lengthL, diameter, ...periods } = inputValues;
    const lengthLResult = calculateLengthWithBall(
      parseFloat(lengthL),
      parseFloat(diameter),
    );

    // Calculate period, gravity, and lengthLResult based on inputValues
    const calculatedResult = {
      lengthLResult,
      20: {
        'small-20': {
          T: parseFloat(periods[20]['smallInput-20']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[20]['smallInput-20']),
          ),
        },
        'medium-20': {
          T: parseFloat(periods[20]['mediumInput-20']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[20]['mediumInput-20']),
          ),
        },
        'large-20': {
          T: parseFloat(periods[20]['largeInput-20']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[20]['largeInput-20']),
          ),
        },
      },
      30: {
        'small-30': {
          T: parseFloat(periods[30]['smallInput-30']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[30]['smallInput-30']),
          ),
        },
        'medium-30': {
          T: parseFloat(periods[30]['mediumInput-30']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[30]['mediumInput-30']),
          ),
        },
        'large-30': {
          T: parseFloat(periods[30]['largeInput-30']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[30]['largeInput-30']),
          ),
        },
      },
      50: {
        'small-50': {
          T: parseFloat(periods[50]['smallInput-50']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[50]['smallInput-50']),
          ),
        },
        'medium-50': {
          T: parseFloat(periods[50]['mediumInput-50']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[50]['mediumInput-50']),
          ),
        },
        'large-50': {
          T: parseFloat(periods[50]['largeInput-50']),
          g: calculateGravity(
            lengthLResult,
            parseFloat(periods[50]['largeInput-50']),
          ),
        },
      },
      Avg: {
        'small-Avg': {
          T:
            (parseFloat(periods[20]['smallInput-20']) +
              parseFloat(periods[30]['smallInput-30']) +
              parseFloat(periods[50]['smallInput-50'])) /
            3,
          g:
            (calculateGravity(
              lengthLResult,
              parseFloat(periods[20]['smallInput-20']),
            ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[30]['smallInput-30']),
              ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[50]['smallInput-50']),
              )) /
            3,
        },
        'medium-Avg': {
          T:
            (parseFloat(periods[20]['mediumInput-20']) +
              parseFloat(periods[30]['mediumInput-30']) +
              parseFloat(periods[50]['mediumInput-50'])) /
            3,
          g:
            (calculateGravity(
              lengthLResult,
              parseFloat(periods[20]['mediumInput-20']),
            ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[30]['mediumInput-30']),
              ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[50]['mediumInput-50']),
              )) /
            3,
        },
        'large-Avg': {
          T:
            (parseFloat(periods[20]['largeInput-20']) +
              parseFloat(periods[30]['largeInput-30']) +
              parseFloat(periods[50]['largeInput-50'])) /
            3,
          g:
            (calculateGravity(
              lengthLResult,
              parseFloat(periods[20]['largeInput-20']),
            ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[30]['largeInput-30']),
              ) +
              calculateGravity(
                lengthLResult,
                parseFloat(periods[50]['largeInput-50']),
              )) /
            3,
        },
      },
    };
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
      console.log('Cannot save result without calculating first.');
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
  const handleExportToPDF = () => {
    // Check if there is at least one element in history and conclusions is not empty
    if (
      resultState.history.length > 0 &&
      resultState.conclusions.trim() !== ''
    ) {
      dispatchResult({ type: 'EXPORT_TO_PDF' });
    } else {
      console.log(
        'Cannot export to PDF. Ensure there is at least one element in history and conclusions are not empty.',
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
