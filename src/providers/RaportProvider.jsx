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

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.field]: action.value,
        },
      };
    case 'SET_PERIOD_DATA':
      return {
        ...state,
        inputValues: {
          ...state.inputValues,
          [action.n]: {
            ...state.inputValues[action.n],
            [action.id]: action.value,
          },
        },
      };
    case 'SET_CONCLUSIONS_VALUE':
      return {
        ...state,
        conclusionsValues: action.value,
      };
    case 'CALCULATE_RESULT':
      return {
        ...state,
        resultState: {
          ...state.resultState,
          currentResult: {
          ...action.result,
          },
        },
      };
    case 'UPDATE_RESULT':
      return {
        ...state,
        resultState: {
          ...state.resultState,
          history: state.resultState.history.filter(
            (_, index) => index !== action.index,
          ),
        },
      };
    case 'SAVE_RESULT':
      return {
        ...state,
        inputValues: initialState,
        resultState: {
          ...state.resultState,
          currentResult: initialResult,
          history: [...state.resultState.history, state.resultState.currentResult],
        },
      };
    case 'EXPORT_TO_PDF':
      return {
        inputValues: initialState,
        resultState: {
          currentResult: initialResult,
          history: [],
        },
        conclusionsValues: '',
      };

    default:
      return state;
  }
};

export const RaportContext = React.createContext({
  appState: {
    inputValues: initialState,
    resultState: {
      currentResult: initialResult,
      history: [],
    },
    conclusionsValues: ''
  },
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
  const [appState, dispatch] = useReducer(rootReducer, {
    inputValues: initialState,
    resultState: {
      currentResult: initialResult,
      history: [],
    },
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const disableError = () => {
    clearTimeout(timer);
    setError(false);
    setErrormsg('');
  }

  // Event handler for input value changesc
  const handleInputChange = (e) => {
    dispatch({
      type: 'SET_INPUT_VALUE',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Event handler for period data changes
  const handlePeriodDataChange = (e) => {
    dispatch({
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
    const isAnyInputEmpty = Object.values(appState.inputValues).some((value) =>
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
    const isAnyInputNotNumber = Object.values(appState.inputValues).some((value) =>
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

    const { lengthL, diameter, ...periods } = appState.inputValues;
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
    dispatch({ type: 'CALCULATE_RESULT', result: calculatedResult });
  };

  // Event handler for saving the result
  const handleSaveResult = () => {
    // Check if the current result is equal to the initial result
    const isResultEqualInitial =
      JSON.stringify(appState.resultState.currentResult) ===
      JSON.stringify(initialResult);

    // If the result is not equal to the initial result, proceed with saving
    if (!isResultEqualInitial) {
      dispatch({ type: 'SAVE_RESULT' });
      dispatch({ type: 'RESET_FORM' });
    } else {
      // Handle the case where the user tries to save without calculating first
      dispatchError('Nie można zapisać wyniku bez wcześniejszego obliczenia.');
    }
  };

  // Event handler for deleting a result from history
  const handleDeleteResult = (index) => {
    dispatch({ type: 'UPDATE_RESULT', index });
  };

  // Event handler for changing the 'conclusions' field
  const handleConclusionsChange = (e) => {
    dispatch({ type: 'SET_CONCLUSIONS_VALUE', value: e.target.value });
  };

  // Event handler for exporting to PDF
  const handleExportToPDF = async () => {
    // Check if there is at least one element in history and conclusions is not empty
    if (
      appState.resultState.history.length >= 1 &&
      appState.conclusionsValues.trim() !== ''
    ) {
      const blob = await pdf(
        <PDFTemplate
          history={appState.resultState.history}
          conclusions={appState.conclusionsValues.trim()}
        />,
      ).toBlob();
      saveAs(blob, 'sprawozdanie.pdf');
      dispatch({ type: 'EXPORT_TO_PDF' });
      disableError();
    } else {
      dispatchError(
        'W celu exportu do pliku PDF, należy zapisać przynajmniej 1 wynik oraz uzupełnić wnioski.',
      );
    }
  };

  return (
    <RaportContext.Provider
      value={{
        appState,
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
