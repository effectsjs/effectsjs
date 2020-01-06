runProgram(
  withHandler(
    {
      *the_thing(__e__, resume) {
        const result = yield function(handler) {
          function handleTheThing() {
            stackResume(handler, "The thing has been dealth with.");
          }

          handleTheThing(__e__);
        };
        return yield resume(result);
      },

      *the_other_thing(__e__, resume) {
        const result = yield function(handler) {
          const handleTheOtherThing = () => {
            stackResume(handler, "The other thing has been dealt with.");
          };

          handleTheOtherThing(__e__);
        };
        return yield resume(result);
      }
    },
    (function*() {
      const messageFromTheThing = yield performEffect({
        type: "the thing"
      });
    })()
  )
);
