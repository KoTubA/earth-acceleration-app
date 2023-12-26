import { useReducer } from 'react';
import SectionTitle from 'src/components/molecules/SectionTitle';
import Button from 'src/components/atoms/Button';
import ResultCard from 'src/components/molecules/ResultCard';
import InputField from 'src/components/atoms/InputField';
import PeriodDataOutput from 'src/components/molecules/PeriodDataOutput';

// TODO: Clean up the code

// Array of periods for calculations
const periods = [20, 30, 50];

// Input fields configuration
const inputFields = [
  { label: 'Small α:', id: 'smallInput' },
  { label: 'Medium α:', id: 'mediumInput' },
  { label: 'Large α:', id: 'largeInput' },
];

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
    'small-20': {
      T: '-',
      g: '-',
    },
    'medium-20': {
      T: '-',
      g: '-',
    },
    'large-20': {
      T: '-',
      g: '-',
    },
  },
  30: {
    'small-30': {
      T: '-',
      g: '-',
    },
    'medium-30': {
      T: '-',
      g: '-',
    },
    'large-30': {
      T: '-',
      g: '-',
    },
  },
  50: {
    'small-50': {
      T: '-',
      g: '-',
    },
    'medium-50': {
      T: '-',
      g: '-',
    },
    'large-50': {
      T: '-',
      g: '-',
    },
  },
  Avg: {
    'small-Avg': {
      T: '-',
      g: '-',
    },
    'medium-Avg': {
      T: '-',
      g: '-',
    },
    'large-Avg': {
      T: '-',
      g: '-',
    },
  },
};

// Reducer for handling result calculations and saving
const resultReducer = (state, action) => {
  switch (action.type) {
    case 'CALCULATE_RESULT':
      console.log('Updated result');
      return {
        ...state,
        currentResult: {
          ...action.result,
        },
      };

    case 'SAVE_RESULT':
      console.log('Result saved');
      return {
        currentResult: initialResult,
        history: [...state.history, state.currentResult],
      };

    default:
      return state;
  }
};

const Results = () => {
  const [inputValues, dispatchInput] = useReducer(reducer, initialState);
  const [resultState, dispatchResult] = useReducer(resultReducer, {
    currentResult: initialResult,
    history: [],
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

    const { lengthL, diameter, ...periods } = inputValues;

    // TODO: Implement actual calculations based on inputValues
    const calculatedResult = {
      lengthLResult: parseFloat(lengthL) + parseFloat(diameter),
      20: {
        'small-20': {
          T: parseFloat(periods[20]['smallInput-20']),
          g: parseFloat(periods[20]['largeInput-20']),
        },
        'medium-20': {
          T: parseFloat(periods[20]['mediumInput-20']),
          g: parseFloat(periods[20]['largeInput-20']),
        },
        'large-20': {
          T: parseFloat(periods[20]['largeInput-20']),
          g: parseFloat(periods[20]['largeInput-20']),
        },
      },
      30: {
        'small-30': {
          T: parseFloat(periods[30]['smallInput-30']),
          g: parseFloat(periods[30]['largeInput-30']),
        },
        'medium-30': {
          T: parseFloat(periods[30]['mediumInput-30']),
          g: parseFloat(periods[30]['largeInput-30']),
        },
        'large-30': {
          T: parseFloat(periods[30]['largeInput-30']),
          g: parseFloat(periods[30]['largeInput-30']),
        },
      },
      50: {
        'small-50': {
          T: parseFloat(periods[50]['smallInput-50']),
          g: parseFloat(periods[50]['largeInput-50']),
        },
        'medium-50': {
          T: parseFloat(periods[50]['mediumInput-50']),
          g: parseFloat(periods[50]['largeInput-50']),
        },
        'large-50': {
          T: parseFloat(periods[50]['largeInput-50']),
          g: parseFloat(periods[50]['largeInput-50']),
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
            (parseFloat(periods[20]['largeInput-20']) +
              parseFloat(periods[30]['largeInput-30']) +
              parseFloat(periods[50]['largeInput-50'])) /
            3,
        },
        'medium-Avg': {
          T:
            (parseFloat(periods[20]['mediumInput-20']) +
              parseFloat(periods[30]['mediumInput-30']) +
              parseFloat(periods[50]['mediumInput-50'])) /
            3,
          g:
            (parseFloat(periods[20]['largeInput-20']) +
              parseFloat(periods[30]['largeInput-30']) +
              parseFloat(periods[50]['largeInput-50'])) /
            3,
        },
        'large-Avg': {
          T:
            (parseFloat(periods[20]['largeInput-20']) +
              parseFloat(periods[30]['largeInput-30']) +
              parseFloat(periods[50]['largeInput-50'])) /
            3,
          g:
            (parseFloat(periods[20]['largeInput-20']) +
              parseFloat(periods[30]['largeInput-30']) +
              parseFloat(periods[50]['largeInput-50'])) /
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

  return (
    <section className="flex justify-center w-full" id="reports">
      <div className="flex flex-col items-center py-16 px-7 lg:px-14 xl:px-20 max-w-screen-xl w-full">
        <SectionTitle
          title="Raport"
          subtitle="Skorzystaj z poniższych pól, aby wprowadzić wyniki eksperymentu."
        />
        <div className="flex flex-col mb-12 w-full">
          <span className="block mb-1 text-sm font-medium text-gray-900 font-display">
            Tabela wyników:
          </span>
          <div className="flex w-full gap-4 overflow-x-scroll md:flex-wrap md:overflow-x-auto pb-2">
            {resultState.history.length > 0 ? (
              resultState.history.map((result, index) => (
                <ResultCard key={index} result={result} title={index} />
              ))
            ) : (
              <p className="text-center text-gray-500">
                Brak zapisanych wyników.
              </p>
            )}
          </div>
        </div>
        <form className="grid grid-cols-2 gap-6 md:gap-4 lg:gap-x-12 xl:gap-x-24 w-full">
          <div className="col-span-full md:col-start-1 md:row-start-1 md:col-span-1">
            <SectionTitle title="Dane wejściowe" isSmall />
            <div className="grid gap-4">
              <InputField
                label="Długość nici z haczykiem (l0):"
                type="text"
                id="lengthL"
                name="lengthL"
                value={inputValues.lengthL}
                onChange={handleInputChange}
              />
              <InputField
                label="Średnica kulki (d):"
                type="text"
                id="diameter"
                name="diameter"
                value={inputValues.diameter}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-span-full md:col-start-1 md:row-start-2 md:col-span-1">
            <span className="block mb-1 text-sm font-medium text-gray-900 font-display">
              Czas t[s] n drgań:
            </span>
            {periods.map((n) => (
              <div key={n} className="mb-6 md:mb-4 border border-gray-200">
                <h4 className="text-center text-white bg-sky-950 font-display pt-2 pb-2">
                  Dla ilości okresów n = {n}
                </h4>
                <div className="grid grid-cols-3 gap-4 p-2">
                  {inputFields.map(({ label, id }) => (
                    <InputField
                      key={`${id}-${n}`}
                      label={label}
                      type="text"
                      id={`${id}-${n}`}
                      name={`${n}`}
                      value={inputValues[n][`${id}-${n}`]}
                      onChange={handlePeriodDataChange}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full md:col-start-2 md:row-start-1 md:col-span-1">
            <SectionTitle title="Dane wyjściowe" isSmall />
            <div>
              <label
                htmlFor="lengthLResult"
                className="block mb-1 text-sm font-medium font-display"
              >
                Długość wahadła (l):
              </label>
              <input
                type="text"
                id="lengthLResult"
                className="text-sm border border-gray-300 focus:outline-none focus:border-sky-500 w-full p-2.5"
                value={resultState.currentResult.lengthLResult}
                disabled
              />
            </div>
          </div>
          <div className="col-span-full md:col-start-2 md:row-start-2 md:col-span-1">
            <span className="block mb-1 text-sm font-medium font-display">
              Tabela wyników:
            </span>
            {periods.map((n) => (
              <PeriodDataOutput
                key={n}
                title={`Dla ilości okresów n = ${n}`}
                result={resultState.currentResult[n]}
              />
            ))}
            <PeriodDataOutput
              title="Średnia wyników"
              result={resultState.currentResult.Avg}
            />
          </div>
        </form>
        <div className="flex justify-center gap-x-4 w-full mt-6">
          <Button title="Oblicz wynik" onClick={handleCalculateResult} />
          <Button title="Zapisz wynik" onClick={handleSaveResult} inverted />
        </div>
      </div>
    </section>
  );
};

export default Results;
