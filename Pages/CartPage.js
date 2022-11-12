import React from 'react';
import { Stylesheet, Text, View, Image, SafeAreaView, Pressable} from 'react-native';


const images = [
    {
        id: "0", 
        image: "https://images-na.ssl-images-amazon.com/images/I/71tbBtDLf2L._AC_UL1500_.jpg", 
        name: "Shoes,"
    },
    {
        id: "1",
        image:  "https://storage.googleapis.com/share-gdicdn/images/product/100054018/100054018_26S_alt4_1332x2000.jpg",
        name: "Sweater",
    },
    {
        id: "2", 
        image: "https://cdnd.lystit.com/photos/2012/05/01/vince-black-leather-pants-product-2-3405878-680594015.jpeg", 
        name: "Leather Pants"
    },
];

const Cart = () => {
    return (
        <>
            <Text style={{ textAlign: "center", fontSize: 30, paddingTop: 50, paddingLeft: 25}}>
                Cart
            </Text>
            {images.map((item) => (
                <Pressable
                    key={item.id}
                    style={{ flexDirection: "row", alignItems: "center" }}
                >
                    <SafeAreaView style={{ margin: 10}}>
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 100, paddingTop: 50}}
                            source={{ uri: item.image}}
                        />
                    </SafeAreaView>
                    <SafeAreaView>
                        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                        <Pressable>
                            <Text 
                                style={{
                                    borderColor: "gray", 
                                    borderWidth: 1, 
                                    marginVertical: 10, 
                                    padding: 5,
                                }}
                            >
                                Add to Cart
                            </Text>
                        </Pressable>
                    </SafeAreaView>
                </Pressable>
            ))}
                <SafeAreaView style={{ height: 1, borderColor: "gray", borderWidth: 2}} />
            </>
    );
                            };                            
    
export default Cart;