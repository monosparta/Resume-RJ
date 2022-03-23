
function Content(props) {
  console.log(props);
  return (
    <span>
      {props.content.map((text) => {
        return (
          <p>
            {text.map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
        );
      })}
    </span>
  );
}
export default Content