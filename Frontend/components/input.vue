<template>
    <div class="input-group">
    <label :for="id" class="input-label">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="input-field"
    />
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
    label: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        default: "",
    },
    modelValue: {
        type: String,
        required: true,
    },
    errorMessage: {
        type: String,
        default: "",
        },
    },
};
</script>

<style scoped>
.input-group {
    margin-bottom: 1rem;
}

.input-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.input-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}
</style>  