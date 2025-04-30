<template>
    <div class="textarea-group">
    <label :for="id" class="textarea-label">{{ label }}</label>
        <textarea
            :id="id"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            class="textarea-field"
            :rows="rows"
            :cols="cols"
        ></textarea>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
    name: "TextArea",
    props: {
    id: {
        type: String,
        required: true,
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
    rows: {
        type: Number,
        default: 4,
    },
    cols: {
        type: Number,
        default: 50,
        },
    },
};
</script>

<style scoped>
.textarea-group {
    margin-bottom: 1rem;
}

.textarea-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.textarea-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    resize: vertical;
}

.error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}
</style>  