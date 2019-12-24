runProgram(
  withHandler(
    {
      *"the thing"(data, resume) {
        const result = yield function(handler) {
          function handleTheThing() {
            stackResume(handler, "The thing has been dealth with.");
          }

          handleTheThing(e);
        };
        return yield resume(result);
      },

      *"the other thing"(data, resume) {
        const result = yield function(handler) {
          const handleTheOtherThing = () => {
            stackResume(handler, "The other thing has been dealt with.");
          };

          handleTheOtherThing(e);
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
