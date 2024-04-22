export default function returnHowManyArguments(...theArgs) {
  let no = 0;
  for (let {} of theArgs) {
    no += 1;
  }
  return no;
}
