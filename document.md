# 과일 API 명세

## 과일 목록 조회

`GET /fruits`

### Authorization

Not required.
만약에 required면 로그인 필요함

### Path parameters

Not required.

### Response fields

표준 리스트 응답 - Path prefix: data[]

| Path | Type   | Description |
| ---- | ------ | ----------- |
| id   | number | 과일 식별자 |
| name | string | 과일 이름   |

### Example request

```text
GET /fruits HTTP/1.1
Host: localhost:3000
```

### Example response

```text
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: 0
X-Frame-Options: DENY
Content-Length: 835

{
  "status" : 200,
  "data" : [
    {
      "id": 1,
      "name: "사과",
    },
    {
      "id": 2,
      "name: "바나나",
    }
  ]
}
```


## 과일 조회

`GET /fruits/{id}`

### Authorization

Not required.

### Path parameters

| Parameter | Type   | Reqeuired | Description |
| --------- | ------ | --------- | ----------- |
| id        | number | true      | 과일 식별자 |

### Response fields

| Path | Type   | Description |
| ---- | ------ | ----------- |
| id   | number | 과일 식별자 |
| name | string | 과일 이름   |

### Example request

```text
GET /fruits/1 HTTP/1.1
Host: localhost:3000
```

### Example response

```text
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
Pragma: no-cache
Expires: 0
X-Frame-Options: DENY
Content-Length: 835

{
  "status" : 200,
  "data" : {
    "id": 1,
    "name: "사과",
  }
}
```
