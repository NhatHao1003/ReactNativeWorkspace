# SmartCampus (React Native + Expo)

Dự án minh họa giao diện quản lý thông tin sinh viên bằng các component cơ bản của React Native.

## Component chính

- Header: Hiển thị tiêu đề SmartCampus ở đầu màn hình.
- ResultStudent: Hiển thị ảnh đại diện, tên sinh viên và mã sinh viên.
- SearchField: Ô nhập tìm kiếm thông tin sinh viên.
- InforStudent: Khối thông tin chi tiết như email và lớp.
- Button: Cụm nút thao tác (Lưu, Đặt lại) có phản hồi nhấn và accessibility cơ bản.

## Cách chạy dự án

1. Cài dependencies:
- npm install

2. Chạy dự án với Expo:
- npm start

3. Mở ứng dụng:
- Nhấn a để chạy Android
- Nhấn w để chạy Web
- Hoặc dùng app Expo Go để quét QR

4. Cách dùng giao diện sau khi mở app:
- Xem phần đầu trang: tiêu đề SmartCampus và thông tin sinh viên mẫu.
- Nhập nội dung vào ô "Tìm kiếm thông tin..." để kiểm tra TextInput hoạt động.
- Nhấn nút "Lưu": nút sẽ đổi trạng thái và hiển thị "Trang thai: da luu".
- Khi đã lưu, nút "Lưu" sẽ bị vô hiệu hóa; nhấn nút "Đặt lại" để quay về "Trang thai: chua luu".
- Khi nhấn nút, giao diện có phản hồi trực quan (đổi nội dung/trạng thái nhấn), giúp dễ nhận biết thao tác đã được ghi nhận.



