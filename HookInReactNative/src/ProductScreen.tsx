import React, {
  useCallback,
  useMemo,
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: '1', name: 'Áo thun', price: 200000 },
  { id: '2', name: 'Quần jean', price: 450000 },
  { id: '3', name: 'Giày thể thao', price: 800000 },
];

export default function ProductScreen() {

  // State lưu từ khóa
  const [keyword, setKeyword] = useState('');



  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
  }, [keyword]);


  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0
    );
  }, [filteredProducts]);

  const handleSelect = useCallback((product: Product) => {
    console.log('Đã chọn:', product.name);
  }, []);
  


  return (
    <View style={{ padding: 20 }}>

      <Text>
        Tìm kiếm sản phẩm
      </Text>

      {/* Ô tìm kiếm */}

      <TextInput
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Nhập tên sản phẩm"
        style={{
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
        }}
      />

      {/* Tổng giá */}

      <Text>
        Tổng giá:{' '}
        {totalPrice.toLocaleString('vi-VN')}đ
      </Text>

      {/* Danh sách */}

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 5 }}>
            <Button
              title={`${item.name} - ${item.price.toLocaleString(
                'vi-VN'
              )}đ`}
              onPress={() => handleSelect(item)}
            />
          </View>
        )}
      />

    </View>
  );
}
