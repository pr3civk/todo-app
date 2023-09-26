import Typewriter from "typewriter-effect";

export default function AutoType() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello! this is my first project!")
          .pauseFor(2500)
          .deleteAll()
          .start()
          .typeString("I know that's a boring todo list everybody does")
          .pauseFor(2500)
          .deleteAll()
          .typeString("But I hope You're gonna like it!")
          .pauseFor(2500)
          .deleteAll()
          .typeString("Have a good day and enjoy!");
      }}
    />
  );
}
