import React from 'react';

const {
    Provider: BookstoreServiceProvider,
    consumer: BookstoreServiceConsumer
} = React.createContext();

export {
    BookstoreServiceProvider,
    BookstoreServiceConsumer
}
