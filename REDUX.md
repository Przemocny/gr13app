# jak dopiąc reduxa do całej apki reacta
1. yarn add redux react-redux @reduxjs/toolkit
- redux - to obsługa pamięci stanu aplikacji
- react-redux {Provider, connect}
- - Provider{store} - komponent którym obejmujemy (wrapper) naszą apkę reacta
- - connect(mapStateToProps, mapDispatchToActions)(Component) - connect łączy wg reguł z mapStateToProps i mapDispatchToActions Component z reduxem
- @reduxjs/toolkit - zastępuje libkę redux i dostarcza łatwiejszą do zrozumienia metodologię pracy z reduxem

2. w przypadku @reduxjs/toolkit
- tworzymy consta store i jest on wynikiem funkcji configureStore z biblioteki toolkita
- do configureStore wchodzi obiekt, który ma 2 klucze
- - reducer - to klucz do umieszczania mniejszych storów w jednym dużym głównym storze - mapowanie na zasadzie { nazwa: store, nazwa1: store1, ... }
- - middleware - to klucz do którego montujemy middleware (np logger) w arrayu - [logger, ...] 
- 
3. <Provider store={store}><App/></Provider> - wrapujemy naszą aplikację komponentem Provider


# jak stworzyc store (np Posts) (w przypadku @reduxjs/toolkit)
1. wytwarzamy np store do postów korzystają z funkcji z createSlice
- do createSlice wchodzi obiekt, który ma klucze
- name - nazwa tego małego stora do postów (np Posts)
- initialState - to stan, który jest załadowany na samym początku - default
- reducers - jest to obiekt, którego kluczami są akcje w obrębie danego stora (fetchPosts, filterPosts). każda akcja ma 2 argumenty (state, action)
- - state to jest aktualny stan stora
- - action to jest akcja (obiekt), z kluczem {payload} który przechwytuje dane które wchodzą do danej akcji
2. createSlice zwraca obiekt z kluczami {reducer i actions}


# jak podpiąc store reduxa do komponentu
- stosujemy do tego metodę connect(mapStateToProps, mapDispatchToActions)(Component)
- - mapStateToProps - funkcja zwracająca obiekt, który jest zaciągany ze stora i wrzucany do danego komponentu
- - mapDispatchToActions - funkcja która zwraca obiekt, który jest połączony z danym storem akcjami
- - Component - do tego komponentu jako propsy wchodzi nasz store wg reguł z mapStateToProps