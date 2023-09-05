import { useState } from "react";
export default function Scoreboard() {
const [player, setPlayer] = useState({
firstName: "Ranjani",
lastName: "Shettar",
score: 10,
});
function handlePlusClick() {
  setPlayer({
    ...player,
    score:player.score +1,
  });
/*when we update a state we should use the set function,
spraeding the properities , then update the property we want*/
}
function handleFirstNameChange(e) {
setPlayer({
...player,
firstName: e.target.value,
});
}
function handleLastNameChange(e) {
setPlayer({
  ...player,  //we should return all properities and then rewrite over  that property  we want 
lastName: e.target.value,
});

}
return (
<>
<div>
  <label>
Score: <b>{player.score}</b>{" "}
<button onClick={handlePlusClick}>+1</button>
</label>
</div>
<div>
  <label>
First name:
<input value={player.firstName} onChange={handleFirstNameChange} />
</label>
</div>
<div>
  <label>
Last name:
<input value={player.lastName} onChange={handleLastNameChange} />
</label>
</div>

</>
);
}