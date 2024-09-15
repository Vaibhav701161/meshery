# Contributing to Meshery Policies

This guide explains how to contribute to Meshery Policies, including how to modify existing policies, create new ones, and test your changes.

## Understanding Meshery Policies

Meshery uses OPA (Open Policy Agent) and Rego language for policy evaluation. Policies are primarily stored in the `policies/wasm` folder of the Meshery codebase.

## Setting Up Your Development Environment

1. Fork and clone the Meshery repository.
2. Ensure you have the necessary dependencies installed (Go, Docker, etc.).
3. Familiarize yourself with the Rego language and OPA concepts.

## Locating and Modifying Existing Policies

1. Navigate to the `policies/wasm` folder in the Meshery codebase.
2. Identify the policy file you want to modify (e.g., `namespace_discovery_relationship_policy`).
3. Open the file and make your changes, ensuring you follow Rego syntax and Meshery conventions.

## Creating New Policies

1. In the `policies/wasm` folder, create a new `.rego` file for your policy.
2. Start with the package declaration and any necessary imports.
3. Implement your policy rules using Rego language.
4. Ensure your policy aligns with Meshery's existing policy structure and naming conventions.

## Testing Rego Policies for Relationships

1. **Code:** Make changes to Rego files in their respective Meshery model folder.

2. **Build:** Build Meshery Server, which loads all available policies.
   ```
   make server
   ```

3. **Test:**
   1. Verify that policy loaded successfully by opening Meshery UI and visiting `Settings` → `Registry`.
   2. Alternatively, verify by reviewing registration logs found under `~/.meshery/logs/*.log`.

4. **Verify Visually (Optional):** Use the MeshMap extension.
   1. Drag and drop the implicated components onto the canvas.
   2. Click on each component and visit the "Relationships" tab menu. Verify presence of "Available Relationship".
   3. Attempt to visually form the relationship by clicking and dragging either the component or edges between components.
   4. If a component is to be mutated by relationship formation, attest specific changes.

## Best Practices

- Keep policies modular and focused on specific concerns.
- Use clear and descriptive names for rules and variables.
- Comment your code to explain complex logic or intentions.
- Ensure policies are performant and don't introduce unnecessary complexity.

## Submitting Your Changes

1. Commit your changes with a clear and descriptive commit message.
2. Push your changes to your fork.
3. Open a pull request against the main Meshery repository.
4. Provide a detailed description of your changes and their purpose.
5. Be prepared to address feedback and make revisions as necessary.

## Additional Resources

- [Rego Language Documentation](https://www.openpolicyagent.org/docs/latest/policy-language/)
- [Meshery Documentation](https://docs.meshery.io/)
- [Open Policy Agent Documentation](https://www.openpolicyagent.org/docs/latest/)

Remember, contributing to policies requires careful consideration of the impact on existing systems and workflows. Always test thoroughly and seek feedback from the community when in doubt.