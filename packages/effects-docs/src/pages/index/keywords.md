---
title: index_keywords
---

| Keyword   | Description                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `perform` | Initiates an effect. The current function halts, and later resumes when an effect handler `resume`s                                                                    |
| `handle`  | `try/handle` blocks allow users to specify handlers for effect events, using well-known `try/catch`-like semantics.  `try/handle` is _not_ compatible with `try/catch` |
| `resume`  | Resumes the previously halted function, who called `perform`.                                                                                                          |
