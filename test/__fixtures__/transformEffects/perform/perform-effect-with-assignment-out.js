function* main() {
  const result = yield perform(
    Fetch({
      url: "www.cool.com"
    })
  );
}
