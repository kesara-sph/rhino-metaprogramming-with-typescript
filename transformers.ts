class MockAPI {
  getData(): Record<string, unknown> {
    return {
      data_filed_alpha: "alpha",
      data_filed_beta: "beta",
      data_filed_gamma: "gamma",
    };
  }
}

const api: MockAPI = new MockAPI();
console.log(api.getData());
