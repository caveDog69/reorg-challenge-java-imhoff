import { test, expect } from "vitest";
import {render, fireEvent, screen} from '@testing-library/vue'

import searchForm from "../components/searchForm.vue";

test("check form input", async () => {
    const {
        getByLabelText,
        getByText,
      } = render(searchForm);

      const queryInput = getByText(/query/i);
  await fireEvent.update(queryInput, "string");
  expect(queryInput).length.above(0);

  });
