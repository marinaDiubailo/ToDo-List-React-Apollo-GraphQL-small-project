import { gql } from '@apollo/client';

export const ALL_TODO = gql`
    query AllTodos {
        todos: allTodos {
            id
            title
            isCompleted
        }
    }
`;

export const ADD_TODO = gql`
    mutation AddTodo($title: String!, $userId: ID!, $isCompleted: Boolean!) {
        newTodo: createTodo(
            title: $title
            user_id: $userId
            isCompleted: $isCompleted
        ) {
            id
            title
            isCompleted
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation UpdateTodo($id: ID!, $isCompleted: Boolean!) {
        updateTodo(id: $id, isCompleted: $isCompleted) {
            id
            title
            isCompleted
        }
    }
`;

export const DELETE_TODO = gql`
    mutation DeleteTodo($id: ID!) {
        removeTodo(id: $id) {
            id
        }
    }
`;
