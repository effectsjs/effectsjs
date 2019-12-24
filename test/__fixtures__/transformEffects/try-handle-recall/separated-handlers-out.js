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
        return yield result;
      },

      *"the other thing"(data, resume) {
        const result = yield function(handler) {
          const handleTheOtherThing = () => {
            stackResume(handler, "The other thing has been dealt with.");
          };

          handleTheOtherThing(e);
        };
        return yield result;
      }
    },
    (function*() {
      const messageFromTheThing = yield perform({
        type: "the thing"
      });
    })()
  )
);
