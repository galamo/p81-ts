export function getWidget(input) {
  if (typeof input === "string") {
    return [{ item: "firstWidget" }];
  } else {
    return { item: "firstWidget" };
  }
}
