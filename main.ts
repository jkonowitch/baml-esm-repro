import { b } from "./baml_client/index.js";

const result = await b.ExtractResume(`
  Vaibhav Gupta
  vbv@boundaryml.com

  Experience:
  - Founder at BoundaryML
  - CV Engineer at Google
  - CV Engineer at Microsoft

  Skills:
  - Rust
  - C++
`);

console.log(result);
