import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// {
// id: 1,
// emoji: "💪",
// name: "Tense Biceps",
// meaning: "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
// },

function createEntry(emojiTerm) {
  return (
    <Entry
      key={emojiTerm.id} // Expected by React. You need this.
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      meaning={emojiTerm.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;

// When we put the function createEntry in our emojipedia.map() and that pulls out data dynamically from emojipedia and mapping it to our createEntry function

// Create and Entry component
// Create props to replace hard coded data
// Map through the emojipedia array and render Entry Components
// Mapping allows us to not have to make 3 different <Entry /> fields.
