import { describe, expect, it, beforeEach } from "vitest"
import {
  clearRegistryContext,
  getRegistryHeadersFromContext,
  setRegistryHeaders,
} from "./context"

describe("registry context", () => {
  beforeEach(() => {
    clearRegistryContext()
  })

  it("should return empty headers by default", () => {
    expect(getRegistryHeadersFromContext("https://example.com")).toEqual({})
  })

  it("should set and get registry headers", () => {
    const headers = {
      "https://example.com": {
        Authorization: "Bearer token-1",
      },
    }
    setRegistryHeaders(headers)

    expect(getRegistryHeadersFromContext("https://example.com")).toEqual({
      Authorization: "Bearer token-1",
    })
  })

  it("should merge registry headers", () => {
    setRegistryHeaders({
      "https://example.com": {
        Authorization: "Bearer token-1",
      },
    })

    setRegistryHeaders({
      "https://other.com": {
        Authorization: "Bearer token-2",
      },
    })

    expect(getRegistryHeadersFromContext("https://example.com")).toEqual({
      Authorization: "Bearer token-1",
    })
    expect(getRegistryHeadersFromContext("https://other.com")).toEqual({
      Authorization: "Bearer token-2",
    })
  })

  it("should overwrite headers for the same URL", () => {
    setRegistryHeaders({
      "https://example.com": {
        Authorization: "Bearer token-1",
      },
    })

    setRegistryHeaders({
      "https://example.com": {
        Authorization: "Bearer token-2",
        "X-Custom": "value",
      },
    })

    expect(getRegistryHeadersFromContext("https://example.com")).toEqual({
      Authorization: "Bearer token-2",
      "X-Custom": "value",
    })
  })

  it("should clear the registry context", () => {
    setRegistryHeaders({
      "https://example.com": {
        Authorization: "Bearer token-1",
      },
    })

    clearRegistryContext()

    expect(getRegistryHeadersFromContext("https://example.com")).toEqual({})
  })
})
