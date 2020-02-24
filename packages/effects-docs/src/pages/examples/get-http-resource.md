### Observations

There are a few observations to take note of in this example. First
observe that we call perform twice, and in both instances, async effects
happen downstream.  However, our code still looks and feels synchronous.
Second, observe how we have decoupled all details on how the resources are obtained in "analyzePage"--we simply expect associated data models back.  There is no mention of fetch, XHR, `<other-http-library>` in our analyze function.  Such decoupling can also be achieved in a dependency injection scheme where our analyzePage function receives functions that are pre-bound to do this work.  However, using effects here reduces the ceremony needed to achieve the same result.
