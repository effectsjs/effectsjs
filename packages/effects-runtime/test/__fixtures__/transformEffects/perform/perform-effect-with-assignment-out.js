function* main() {
  const result = yield performEffect(
    Fetch({
      url: "www.cool.com"
    })
  );
}
