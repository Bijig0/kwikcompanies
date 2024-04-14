import useClickOutside from "@utils/useClickOutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const GOOGLE_MAPS_API_KEY = "AIzaSyD2uwgS-JBNlmWY84ryeDwy6T_-hFn0oFg";

export const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`;

const BusinessLocation = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: "initMap",
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  console.log({ data });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When the user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  const ref = useClickOutside(() => {
    // When the user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });
  return (
    <>
      <h5>Business Location</h5>
      <p>Step 4 of 8</p>
      <div ref={ref}>
        <label htmlFor="message">Home Address</label>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
      </div>
      <label htmlFor="message">
        Is your business located at your home address?
      </label>
      <div className="flex flex-col">
        {["Yes", "No"].map((option) => (
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name={option}
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
      <label htmlFor="message">
        What is your address for service of documents?
      </label>
      <div className="flex flex-col">
        {["Home", "Other"].map((option) => (
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name={option}
              value={option}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    </>
  );
};

export default BusinessLocation;
