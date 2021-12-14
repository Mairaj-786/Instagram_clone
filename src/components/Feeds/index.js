import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../Post/Post";

const post = [
  {
    user: {
      id: 1,
      imageUri:
        "https://miro.medium.com/max/1002/1*HBeJL3s2ekcDh-PVHxa3KA.jpeg",
      name: "Salman",
    },
    postUri: "https://miro.medium.com/max/1002/1*HBeJL3s2ekcDh-PVHxa3KA.jpeg",
  },
  {
    user: {
      id: 2,
      imageUri:
        "data:image/jpeg;base64,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",
      name: "Salman",
    },
    postUri:
      "data:image/jpeg;base64,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",
  },
  {
    user: {
      id: 3,
      imageUri:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgZHBocGhgaGRoaGhgaHBoaGhwaHBocIS4lHCErIxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHTQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0MTE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABGEAACAQIDBQQGBggEBQUAAAABAgADEQQhMQUSQVFhBnGBkQcTIjKhsVJiksHR8BQjQnKywtLxU4Ki4RUkM3OTFhdDRGP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACERAQEAAgICAgMBAAAAAAAAAAABAhESMQMhQVETYXEy/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQERECio4AJJsBxnzx2w28+JqENYbjFQLiyjMnhnmNevCdP9JHaQYdFpL773uNPYZXW/n/AAmcQr1gylsrhhcWGYPHwNvOTVYz5HqMQwGpUGwuMvvyztKDdbg6NbrfSx+cuLUzL2vbK3Qhs/hbxlr1tzfuFrZGw++a2p+EKlcyLhSGB4rY59RfI8hbleY+vRZLgG63uOeegJ5/0yp3Cm66HPX3b2/tKqWIG9uvodLm45nMcIEV3HFSOdtOUuYbFMjAoxUggqQcwRmD3xiEBvnn88jqfCQShGk2e2W2O1+jPtPUq1qlOocmUvYDJWtdrd+v9p1MGfMnZHbDYesHU34WzzurAT6F7N4hnw9NmBHsgC+rBQBvc8zfXv4wysvERDCIiAnkiNjVDqnFiQD1ClreQPlJcyWVtmnsRE1hERAREQEREBERAREQEREBERAREQEREDivpixO/iadP3WReOjq26QeWR3hOaYgMNSCc72Nwb2H3TsPpl2YGWlVAJYFgTbRbXsTyyOXfOPoA7BQCWPL8Jiu4pw9TdBHA2Hx/tLbG2Xl3TJrsHENohlzDbGqMd0ob6aSeUXwrEBzb85S3UvY8pu+xuxeIqGwpkA3G8fd553z/vLmI9HWJBy3AO/OOchw36aIlQ6y7UccRe/X8/kTb8X2DqKtwwJtmLTUMThWViGGYNj07/h5xjlMr6MsLjPa9gH3XDDLj+QcjPpPsdjvW4ZDbMAC/Buo+8HMEGfN1NN23WfQno3DfoNMvqS9j9UMQPgLdwEtz+G2RIuJxW6bZXtfPx/CYdO0DG+Sjz/GTlnMe244XKbjYomunbbX/ZA7j+Mf8Zdvd3e8D8ZP5cVfiyWNpEio6jJ0IqJ1zuPC4I8DM5svHLWQOBY/tLxU8RNcxleozKzAXUmxtY7pGanmND4SmntH1Tbyj95b5N38u+c5nJl+nXLDeM+25xIuBxa1UDobg+YPEHrJU9DzEREBERAREQEREBERAREQEREBERAREQMP2o2b+kYarT4lSR3jO3ja3jPnbsxQ/wCZG8Pdvl1GX3z6gnIO32xEw2Np4hEK06qsrW931g3mPcSoHfu9JOf+avx/6m2bwFFStrTL4XBoDew8pr/Z3HJUBCOCVNiO7j3Ta8Ohniku3ryq8r20kfEPfWXwQNbCRqj7xsJeV9OeM9sTjtCJy7tLTVaj6DeCn4528p1bHgCc/wC12yEcGofeGndMwy45e15Tli1PAIK9ejSGQd1S97WDsAT4Anyn01gMKtKmlNAAqKFAGlgJw/sjskJSdqdvXupJqH/4qZ4J9duf4TtOxKHq6FJL33UUXOpyE9WOct1Hmzw4zdScRhUcWdQ3eNO7lIR2Dh/8JfM/jMpEq4yols6rAYjsvhjckMo1PttYeDEgTXsJQVGb1YIXRSdSBxI0E2jtCzCmLAlb+1ugk2tlcDhf7pqhrlz7HurpzJ8fKefy6l1I9Hi3Zu1Prqxsxy++WHTe4S/TffQE6ZW5ym2WU5uiNgMU2GYsuaH3kJy7x1m27O2xSrAbrDe+icmHhxmn4gFsrSLV2ebXBIPDMix75WPkyn8Tl45l/XTInPdn9smwxKY3f3LXSqFLk24MFFz365TPbG7a4LEuEpVxvnRGBQk8hvCxPQZz1Y2ZTceXLG43VbLERNYREQEREBERAREQEREBERAREQPJqXpLplsC9tA1MnoAw/2m2zX+3QJ2fit0XIpORlfQXuOotfwmXps7cbw+AxF2NEhHVVKgkgvc6LnYWF5tOxu0ddHSniUKsct4aHO2ZHs37jJ+xKKVaaMwzsLHlJ+PwyAAbupAHG2es8dy9ar2zGbWtu7Rektwhe/u268xrNYp7Txz5lCi9FOnKxsZveJpk2PIS9hlUrewmY9l6aTSwddzvPUf90qFHgbnzzlvtHT/AFLjWwz6zdMewt3TSu0uI3aTnp98d5RvwynZKjSWgrhd5yEy47xpq26PEjpOmUksoHIAeQtOdejhxXw9Io1xSO6/DdcENa3EkWzGVjrOkT0eLGze3m82UtmnsRE7OLyaN2gw7UajMSClRmYEE718iVItlrwOduE3mR8VhKdRd10Vl1swBF+ecjPHlNLwy43bl526iuKasS5IFlzNybAZC9+kyDbRpoxR2s66q2RHgZveE2XQpZ06VNDzVFU+YF5fxGGRxZ0VhyZQw8jOc8P7dL5t/DmuK27SQZOL989w20N+1jn0m+V9g4Vxuth6JB//ADX5gZTQ+3eEXAmjXoUgKTkpVAJO6bA0yqnTIPfuHE5r4r8Nx8svaNtbDF1Ib2h4eFpzjbGB9S4cG2trEht62RBGljn0m8bR7XYdKe8PbcjJAf4jwHxnN9p4967l346AZADkJvixyl2zy5Y606zsD0tU/UouIp1GrKAGanuFXtlv+0wIJ1ItrpN/2H2hw+LTeo1AxAuynJ1v9JTnbrp1nzFhqdjflMphsW9Mo6OyOuYKkgi5J1Gc9GpXnr6hiIktIiICIiAiIgIiICIiAiJ4TAS3XpB1ZTowIPcRYzBbU7X4Wjcb/rGH7FKzHxN90eJml7X9Ildriiq0xztvv35+yPIzZjam5RRs+suGqvhi1/VuUB6CxXIaeyRJdbayNVRSwADAAXzZvwA/OU5hjNu1DiDWdmcvYsSczbId2QtlMg2Cq1QzggpvBvZzKqcwR1GeWtxPLn4tZXb2+PPljPt2HH4tETfZgoFiSTYACas22U3DVpkqWZiAbgOoNgWXrz107preHoevVEr41NwEGzuENrZEra7Dx4Sa9Og7rQosaztcBrFKNMC4ZiPeZQLG5vewF85PD7XP0za7ZFVCyi1smHIzS+1u1VZNxTnfP8/nST9tYT9CRwj3DhLEjO92DHp/vNEqOXbqTK8eE3tGeWppvXob29Tw1XEJWqKiOqMGY2UOpItfhcNx+jO4YfEI6hkZWU6MpDA+InyrgQVVuYIHkZsOA2i9L2qbPTfLNGK+dtR0M9cxljxW2V9IROM7N9I2NUAP6upYZlksx8UYD4TLj0pMACcMDfiKpt5bhtHGnKOnROaUfSlc2OGHhVN/ikz2zu32FqEK2/SJIA9Yotc/WUkAdTaZxrdxt0TyezGkhbT2fTxFJ6VVA6OLMp8wQRmCDYgjMEAybED5f7V7JXDYyvQRmZEYBWb3rMiuAba23rX42vMaqidX9LnZd2f9Npi6boFYAXKlchUI4ru2BP7O6Dpcjl9PDg8bnyH+8qewp0+enz6T2o9856R4S2RKTX1bEROaiIiAiIgIiICIlupUCgkkAAEkk2AAzJJ4CBUxtrpNZ2j24wlIkBjVYcKY3h9o2U+BM0XtZ2rbFMUpsy4cZBdPWWPvsOR4KehOemvLLmP2i5fTdsb6RarXFKkiDgXJdj1sLAHpnNa2rtyviP8Aq1XYfQFlT7IFj3m5mOIjd5y5jIndrw2A/Py0lDjI909veKk0YB8MGuDysOhP4XvM32HxxTfoOff93o3DPvmIqkBzfnbzH4iVPQK2qKSCDc2+PfnOHlks9vR4rZdxuFbZFGvZw4Rx7LKRlcHUcs75dZmtlUKVAbiMWLe+5tdzlZQBoozNuc0WpjhVs2avlvHQPna55m2vdJmCxwpkE+8dSTe2h9nkMyP7Ty3HLWnt/LLOl30iYu7qnTP8+JmvbNwORdtToOnOSXDYmsXbNRmT1mXwuCLEgZKoLMeCqouWPQCXPU4xw7vKtZx+F9WTmLuFa3KwNh5EHxElpna3SY7aNXfe/E7oA5XJNvBbDwmXw1Cwtxsc568JqaeTO+9rtC12Atlkeh5fnnLq0siOB4decqotdeR498rRr5cZbnUV8JY719M7fnpJL2isDukShtTAz2ze22Kw9IUUKMAfYaorMVX6AswyGdr6aaASUPSVjUPtJQcZWsrre7AWJ3zY58pqVVePEaSjEVDuXGoKn4g8dJmo3ddq2b21wdXDrXNZEByZSbsrjVN0C7dCBmM4/wDXmA/xm/8AFV/onEcFSIAZjdiPAX5dMh5SUQJPCKuVdsodrsC+QxNMX4OSl/BwJx/0mbAp4aslfDgfo9e/uNdUqi5IUjIKVsQugs1srSA72yAzMwm0Hdibe4D7v0iMifnHHXRMrUZfazDm/JpWHIyYePCU1aW7wuBw/aXxnqPyO8OKn3h+MKfWERE5tIiICIiAiIgeTn/pY236rDrh1Nmrk73/AG1zYf5iVHUb06BPnz0i7V9fjqpButMikvclw3+sv8JuM9svSHTfJe4SWpmK39JLSrdQek7bRpMDTxpZR5cDxs09Mocz1jLbPMGN2hTuN7wPTkfgJVsHFByaT6t7v7w1HjL2JPEcdRwlvYCUqeNpvWdkpKSzFULm9jurYAmxJAvac88eWNjphlxqZW2OwYlGtnmJ6Njk++5z5ZeE6F/wWhXX1tGoXQki62vfkbrcHTIjjLlDYtJNU3ur5/DT4TzzDL7ei54NZ2VsguAlNbKMix0H9R6fKZDtjTTCYQUV/wCpiCBw3iikF2bpooH1j1M3XZeGzvbIaZWAnMvSvQNDF+sLO/rUDLvZqjL7G4OS5Brc2adMcZHLPO300akm/WJ4KbfZFvumxDKxmD2OmQJ4mZtOU9Eccva4ose+KoPvDUfGAMpWTNQLWDD5yyzZwosx5GWXbOGyLjGR8RUUKwPI/wBpVvTGY1/bUcCR8M/umbVpl98AdTPDUkFX4me+ujZpLB8Osx2IqbvV2J3RwXP3jLm/fM6CQnawLH33NgOQ/Ocy1untQbgBvkTY/E7x8T8DLD0+Pu8QRmPAjSXsQbhwTqVz7yB98t00OYBOWn3iY19YRETm0iIgIiICIiBjO0G0P0fDVq/GmjMBzYD2R4mw8Z8zEk6kk8ScyTxJ5zt/pdxu5gRTvnVqKLfVT2z/AKlTznDyOHS/4y8WXtKR9JIwT+x3Ej7/AL5j6b5W5fI6ffJWAf3h1HylJT6L/OXlaQqTZkSShgXbykiAYJgR6pngW4fO2QHf7akfKVVNRPLey37yj+L8JN6bG6+i13OIqID7Bpl2XhvKyKpHI2Y/kC3Tv0Jb3tOceiemTWrNyRB9pif5Z1GTl2qKEpAaTRfSzsU1sMtRRdqbXy5EZ+Wc32/KWMVh99GU8RryPA+Bk1sfOWEo7qiTTMl2h2b6is6WspzXoLkEeBBHhfjMcpynXHLc2izVXlae6nwlpDK96VtNj2oZCYyS7yJVMUi27zG4lv1iyaTMZjz7QkqiWak9vIzVba3+XzlKEtmTbkL/ADtDV5qm8eg+MoIu9+Cj4mVbthbPylFQm1hlfjxgUqwIJOjE+QOXykhczkdRIzEAAaWlFOuAbKb9Nb90D62iInNpERAREQEREDi3pjx+/iqdG+VNAf8ANUa5/wBKL5zQMQlrN9HXumX7b4712PxD3y9ayDup/qxb7F/GQlswtlflOk6QxuIW2nHTqJe2ZUuW8JQMiUbThzEt0Duu3IwpkwfaMlI0xyvJVF7zUpd56DLN56GgH18J6xsg+szH7IX+qUsdZXXHsoPq3+0Sfluyb3Gx0n0TUbU6783Vfsrf+adBmoejKhu4JWt771G8m3P5Zt95N7UQTF4vMGkekLY4emagHtLdr87D2h4qAe9AOM5cJ3/G0A6FT4dCMwZxPtBs00KpFrKxJXkLHNfC48CvOMbq6MpubY9TPS0thoJnVD1zItUy6zSPVMCzebP6MNmUcRjnSvSSqgw7sFdQyhhUogMAeNiwv1M1YtN99CyXxeJblRQfae/8sm9NjoVTsHs1tcHR8F3f4bSLU9G2zG/+sB+7Uqr/AAuJt8SNqaZ/7Y7M/wABu719f+uSqXo/2cumFXxaofm02mIGDw3ZLAJ7uDw46mkjHzYEzLUMOqCyqqjkqhR5CXogIiICIiAiIgJHxuJFOm9RtERmPcqlj8pImrekjFer2biT9JQnhUdaZ+DGB89NULtvNmzEs3Vibn4mSqiXGvd0kOj7wk5zOiEN6pOTDMaMNZHdvakqunGY9z7UKS0eTMM8xqG8lUHzhLKK0qBkXD1L3HKXN6aLrtkZcxTe0Rf3bL9kBT8RLdBd50HUfP8AvKXu5NtWPxMj5bOndux9HcwWHX6ik97e0fnMzeRsEgREUaKqjyFpe3pKly88lG9PC8CsmaZ202aHQ8N7NT9GoND3Eeye8cptj1bTD7VpGsNwa/tH6I/GZZtsri/fkeP+8p3pme02CCVGZdL7r/vcD46d46zBuZ0xu452aoxllzKmMtuZQsmdE9CQvXxR5JSHm1T8JzozonoOf9djB9Wj8DU/GTl02OxxESFEREBERAREQEREBERA8nOvTXjNzBU0/wASsoP7qq7fxBJ0Wcg9NmOU1MPRzuquzcrOVA/gb4TZ2yuXYfW/WZHdvMbSYcJODtbK1+stlWqtNpjH98ydXpVDq3lNg7EdkkxtLGPv/rKNP9UliP1jAsjs2lroy28TwvlpGpI0vKcxLNI3zlQMbamq9mkxzMa8mUXuo75rKnYY5k/RVj5iw+JEk7Fo7+IorzdPIMD8hIdA2Vzz3R5kN/LM32Kpb2Np/V3m8lI++T9n07ahyEqvKFlUhTwtLbPLhEtvAjVCTp58u7rKMfV9Sm4mdR9Og4seg+ck1KgpqajaDQDiTpMHjahVS7Z1X1PBF4Ks0aZtWndiuozDdRx+Oc1HEUijMhzI48xa4PiCJ0Wpgt1Cx4zTto4beVj+0lyvVf2lPxI8ecS6pZtgmaeMcp6zSgmdELLGb/6CmvXxXVKf8TznuINlM6B6CB/zGK/7afxtMybHbIiJCiIiAiIgf//Z",
      name: "Salman",
    },
    postUri:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGRgZHBocGhgaGRoaGhgaHBoaGhwaHBocIS4lHCErIxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHTQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0MTE0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAK8BIAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABGEAACAQIDBQQGBggEBQUAAAABAgADEQQhMQUSQVFhBnGBkQcTIjKhsVJiksHR8BQjQnKywtLxU4Ki4RUkM3OTFhdDRGP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EACERAQEAAgICAgMBAAAAAAAAAAABAhESMQMhQVETYXEy/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQERECio4AJJsBxnzx2w28+JqENYbjFQLiyjMnhnmNevCdP9JHaQYdFpL773uNPYZXW/n/AAmcQr1gylsrhhcWGYPHwNvOTVYz5HqMQwGpUGwuMvvyztKDdbg6NbrfSx+cuLUzL2vbK3Qhs/hbxlr1tzfuFrZGw++a2p+EKlcyLhSGB4rY59RfI8hbleY+vRZLgG63uOeegJ5/0yp3Cm66HPX3b2/tKqWIG9uvodLm45nMcIEV3HFSOdtOUuYbFMjAoxUggqQcwRmD3xiEBvnn88jqfCQShGk2e2W2O1+jPtPUq1qlOocmUvYDJWtdrd+v9p1MGfMnZHbDYesHU34WzzurAT6F7N4hnw9NmBHsgC+rBQBvc8zfXv4wysvERDCIiAnkiNjVDqnFiQD1ClreQPlJcyWVtmnsRE1hERAREQEREBERAREQEREBERAREQEREDivpixO/iadP3WReOjq26QeWR3hOaYgMNSCc72Nwb2H3TsPpl2YGWlVAJYFgTbRbXsTyyOXfOPoA7BQCWPL8Jiu4pw9TdBHA2Hx/tLbG2Xl3TJrsHENohlzDbGqMd0ob6aSeUXwrEBzb85S3UvY8pu+xuxeIqGwpkA3G8fd553z/vLmI9HWJBy3AO/OOchw36aIlQ6y7UccRe/X8/kTb8X2DqKtwwJtmLTUMThWViGGYNj07/h5xjlMr6MsLjPa9gH3XDDLj+QcjPpPsdjvW4ZDbMAC/Buo+8HMEGfN1NN23WfQno3DfoNMvqS9j9UMQPgLdwEtz+G2RIuJxW6bZXtfPx/CYdO0DG+Sjz/GTlnMe244XKbjYomunbbX/ZA7j+Mf8Zdvd3e8D8ZP5cVfiyWNpEio6jJ0IqJ1zuPC4I8DM5svHLWQOBY/tLxU8RNcxleozKzAXUmxtY7pGanmND4SmntH1Tbyj95b5N38u+c5nJl+nXLDeM+25xIuBxa1UDobg+YPEHrJU9DzEREBERAREQEREBERAREQEREBERAREQMP2o2b+kYarT4lSR3jO3ja3jPnbsxQ/wCZG8Pdvl1GX3z6gnIO32xEw2Np4hEK06qsrW931g3mPcSoHfu9JOf+avx/6m2bwFFStrTL4XBoDew8pr/Z3HJUBCOCVNiO7j3Ta8Ohniku3ryq8r20kfEPfWXwQNbCRqj7xsJeV9OeM9sTjtCJy7tLTVaj6DeCn4528p1bHgCc/wC12yEcGofeGndMwy45e15Tli1PAIK9ejSGQd1S97WDsAT4Anyn01gMKtKmlNAAqKFAGlgJw/sjskJSdqdvXupJqH/4qZ4J9duf4TtOxKHq6FJL33UUXOpyE9WOct1Hmzw4zdScRhUcWdQ3eNO7lIR2Dh/8JfM/jMpEq4yols6rAYjsvhjckMo1PttYeDEgTXsJQVGb1YIXRSdSBxI0E2jtCzCmLAlb+1ugk2tlcDhf7pqhrlz7HurpzJ8fKefy6l1I9Hi3Zu1Prqxsxy++WHTe4S/TffQE6ZW5ym2WU5uiNgMU2GYsuaH3kJy7x1m27O2xSrAbrDe+icmHhxmn4gFsrSLV2ebXBIPDMix75WPkyn8Tl45l/XTInPdn9smwxKY3f3LXSqFLk24MFFz365TPbG7a4LEuEpVxvnRGBQk8hvCxPQZz1Y2ZTceXLG43VbLERNYREQEREBERAREQEREBERAREQPJqXpLplsC9tA1MnoAw/2m2zX+3QJ2fit0XIpORlfQXuOotfwmXps7cbw+AxF2NEhHVVKgkgvc6LnYWF5tOxu0ddHSniUKsct4aHO2ZHs37jJ+xKKVaaMwzsLHlJ+PwyAAbupAHG2es8dy9ar2zGbWtu7Rektwhe/u268xrNYp7Txz5lCi9FOnKxsZveJpk2PIS9hlUrewmY9l6aTSwddzvPUf90qFHgbnzzlvtHT/AFLjWwz6zdMewt3TSu0uI3aTnp98d5RvwynZKjSWgrhd5yEy47xpq26PEjpOmUksoHIAeQtOdejhxXw9Io1xSO6/DdcENa3EkWzGVjrOkT0eLGze3m82UtmnsRE7OLyaN2gw7UajMSClRmYEE718iVItlrwOduE3mR8VhKdRd10Vl1swBF+ecjPHlNLwy43bl526iuKasS5IFlzNybAZC9+kyDbRpoxR2s66q2RHgZveE2XQpZ06VNDzVFU+YF5fxGGRxZ0VhyZQw8jOc8P7dL5t/DmuK27SQZOL989w20N+1jn0m+V9g4Vxuth6JB//ADX5gZTQ+3eEXAmjXoUgKTkpVAJO6bA0yqnTIPfuHE5r4r8Nx8svaNtbDF1Ib2h4eFpzjbGB9S4cG2trEht62RBGljn0m8bR7XYdKe8PbcjJAf4jwHxnN9p4967l346AZADkJvixyl2zy5Y606zsD0tU/UouIp1GrKAGanuFXtlv+0wIJ1ItrpN/2H2hw+LTeo1AxAuynJ1v9JTnbrp1nzFhqdjflMphsW9Mo6OyOuYKkgi5J1Gc9GpXnr6hiIktIiICIiAiIgIiICIiAiJ4TAS3XpB1ZTowIPcRYzBbU7X4Wjcb/rGH7FKzHxN90eJml7X9Ildriiq0xztvv35+yPIzZjam5RRs+suGqvhi1/VuUB6CxXIaeyRJdbayNVRSwADAAXzZvwA/OU5hjNu1DiDWdmcvYsSczbId2QtlMg2Cq1QzggpvBvZzKqcwR1GeWtxPLn4tZXb2+PPljPt2HH4tETfZgoFiSTYACas22U3DVpkqWZiAbgOoNgWXrz107preHoevVEr41NwEGzuENrZEra7Dx4Sa9Og7rQosaztcBrFKNMC4ZiPeZQLG5vewF85PD7XP0za7ZFVCyi1smHIzS+1u1VZNxTnfP8/nST9tYT9CRwj3DhLEjO92DHp/vNEqOXbqTK8eE3tGeWppvXob29Tw1XEJWqKiOqMGY2UOpItfhcNx+jO4YfEI6hkZWU6MpDA+InyrgQVVuYIHkZsOA2i9L2qbPTfLNGK+dtR0M9cxljxW2V9IROM7N9I2NUAP6upYZlksx8UYD4TLj0pMACcMDfiKpt5bhtHGnKOnROaUfSlc2OGHhVN/ikz2zu32FqEK2/SJIA9Yotc/WUkAdTaZxrdxt0TyezGkhbT2fTxFJ6VVA6OLMp8wQRmCDYgjMEAybED5f7V7JXDYyvQRmZEYBWb3rMiuAba23rX42vMaqidX9LnZd2f9Npi6boFYAXKlchUI4ru2BP7O6Dpcjl9PDg8bnyH+8qewp0+enz6T2o9856R4S2RKTX1bEROaiIiAiIgIiICIlupUCgkkAAEkk2AAzJJ4CBUxtrpNZ2j24wlIkBjVYcKY3h9o2U+BM0XtZ2rbFMUpsy4cZBdPWWPvsOR4KehOemvLLmP2i5fTdsb6RarXFKkiDgXJdj1sLAHpnNa2rtyviP8Aq1XYfQFlT7IFj3m5mOIjd5y5jIndrw2A/Py0lDjI909veKk0YB8MGuDysOhP4XvM32HxxTfoOff93o3DPvmIqkBzfnbzH4iVPQK2qKSCDc2+PfnOHlks9vR4rZdxuFbZFGvZw4Rx7LKRlcHUcs75dZmtlUKVAbiMWLe+5tdzlZQBoozNuc0WpjhVs2avlvHQPna55m2vdJmCxwpkE+8dSTe2h9nkMyP7Ty3HLWnt/LLOl30iYu7qnTP8+JmvbNwORdtToOnOSXDYmsXbNRmT1mXwuCLEgZKoLMeCqouWPQCXPU4xw7vKtZx+F9WTmLuFa3KwNh5EHxElpna3SY7aNXfe/E7oA5XJNvBbDwmXw1Cwtxsc568JqaeTO+9rtC12Atlkeh5fnnLq0siOB4decqotdeR498rRr5cZbnUV8JY719M7fnpJL2isDukShtTAz2ze22Kw9IUUKMAfYaorMVX6AswyGdr6aaASUPSVjUPtJQcZWsrre7AWJ3zY58pqVVePEaSjEVDuXGoKn4g8dJmo3ddq2b21wdXDrXNZEByZSbsrjVN0C7dCBmM4/wDXmA/xm/8AFV/onEcFSIAZjdiPAX5dMh5SUQJPCKuVdsodrsC+QxNMX4OSl/BwJx/0mbAp4aslfDgfo9e/uNdUqi5IUjIKVsQugs1srSA72yAzMwm0Hdibe4D7v0iMifnHHXRMrUZfazDm/JpWHIyYePCU1aW7wuBw/aXxnqPyO8OKn3h+MKfWERE5tIiICIiAiIgeTn/pY236rDrh1Nmrk73/AG1zYf5iVHUb06BPnz0i7V9fjqpButMikvclw3+sv8JuM9svSHTfJe4SWpmK39JLSrdQek7bRpMDTxpZR5cDxs09Mocz1jLbPMGN2hTuN7wPTkfgJVsHFByaT6t7v7w1HjL2JPEcdRwlvYCUqeNpvWdkpKSzFULm9jurYAmxJAvac88eWNjphlxqZW2OwYlGtnmJ6Njk++5z5ZeE6F/wWhXX1tGoXQki62vfkbrcHTIjjLlDYtJNU3ur5/DT4TzzDL7ei54NZ2VsguAlNbKMix0H9R6fKZDtjTTCYQUV/wCpiCBw3iikF2bpooH1j1M3XZeGzvbIaZWAnMvSvQNDF+sLO/rUDLvZqjL7G4OS5Brc2adMcZHLPO300akm/WJ4KbfZFvumxDKxmD2OmQJ4mZtOU9Eccva4ose+KoPvDUfGAMpWTNQLWDD5yyzZwosx5GWXbOGyLjGR8RUUKwPI/wBpVvTGY1/bUcCR8M/umbVpl98AdTPDUkFX4me+ujZpLB8Osx2IqbvV2J3RwXP3jLm/fM6CQnawLH33NgOQ/Ocy1untQbgBvkTY/E7x8T8DLD0+Pu8QRmPAjSXsQbhwTqVz7yB98t00OYBOWn3iY19YRETm0iIgIiICIiBjO0G0P0fDVq/GmjMBzYD2R4mw8Z8zEk6kk8ScyTxJ5zt/pdxu5gRTvnVqKLfVT2z/AKlTznDyOHS/4y8WXtKR9JIwT+x3Ej7/AL5j6b5W5fI6ffJWAf3h1HylJT6L/OXlaQqTZkSShgXbykiAYJgR6pngW4fO2QHf7akfKVVNRPLey37yj+L8JN6bG6+i13OIqID7Bpl2XhvKyKpHI2Y/kC3Tv0Jb3tOceiemTWrNyRB9pif5Z1GTl2qKEpAaTRfSzsU1sMtRRdqbXy5EZ+Wc32/KWMVh99GU8RryPA+Bk1sfOWEo7qiTTMl2h2b6is6WspzXoLkEeBBHhfjMcpynXHLc2izVXlae6nwlpDK96VtNj2oZCYyS7yJVMUi27zG4lv1iyaTMZjz7QkqiWak9vIzVba3+XzlKEtmTbkL/ADtDV5qm8eg+MoIu9+Cj4mVbthbPylFQm1hlfjxgUqwIJOjE+QOXykhczkdRIzEAAaWlFOuAbKb9Nb90D62iInNpERAREQEREDi3pjx+/iqdG+VNAf8ANUa5/wBKL5zQMQlrN9HXumX7b4712PxD3y9ayDup/qxb7F/GQlswtlflOk6QxuIW2nHTqJe2ZUuW8JQMiUbThzEt0Duu3IwpkwfaMlI0xyvJVF7zUpd56DLN56GgH18J6xsg+szH7IX+qUsdZXXHsoPq3+0Sfluyb3Gx0n0TUbU6783Vfsrf+adBmoejKhu4JWt771G8m3P5Zt95N7UQTF4vMGkekLY4emagHtLdr87D2h4qAe9AOM5cJ3/G0A6FT4dCMwZxPtBs00KpFrKxJXkLHNfC48CvOMbq6MpubY9TPS0thoJnVD1zItUy6zSPVMCzebP6MNmUcRjnSvSSqgw7sFdQyhhUogMAeNiwv1M1YtN99CyXxeJblRQfae/8sm9NjoVTsHs1tcHR8F3f4bSLU9G2zG/+sB+7Uqr/AAuJt8SNqaZ/7Y7M/wABu719f+uSqXo/2cumFXxaofm02mIGDw3ZLAJ7uDw46mkjHzYEzLUMOqCyqqjkqhR5CXogIiICIiAiIgJHxuJFOm9RtERmPcqlj8pImrekjFer2biT9JQnhUdaZ+DGB89NULtvNmzEs3Vibn4mSqiXGvd0kOj7wk5zOiEN6pOTDMaMNZHdvakqunGY9z7UKS0eTMM8xqG8lUHzhLKK0qBkXD1L3HKXN6aLrtkZcxTe0Rf3bL9kBT8RLdBd50HUfP8AvKXu5NtWPxMj5bOndux9HcwWHX6ik97e0fnMzeRsEgREUaKqjyFpe3pKly88lG9PC8CsmaZ202aHQ8N7NT9GoND3Eeye8cptj1bTD7VpGsNwa/tH6I/GZZtsri/fkeP+8p3pme02CCVGZdL7r/vcD46d46zBuZ0xu452aoxllzKmMtuZQsmdE9CQvXxR5JSHm1T8JzozonoOf9djB9Wj8DU/GTl02OxxESFEREBERAREQEREBERA8nOvTXjNzBU0/wASsoP7qq7fxBJ0Wcg9NmOU1MPRzuquzcrOVA/gb4TZ2yuXYfW/WZHdvMbSYcJODtbK1+stlWqtNpjH98ydXpVDq3lNg7EdkkxtLGPv/rKNP9UliP1jAsjs2lroy28TwvlpGpI0vKcxLNI3zlQMbamq9mkxzMa8mUXuo75rKnYY5k/RVj5iw+JEk7Fo7+IorzdPIMD8hIdA2Vzz3R5kN/LM32Kpb2Np/V3m8lI++T9n07ahyEqvKFlUhTwtLbPLhEtvAjVCTp58u7rKMfV9Sm4mdR9Og4seg+ck1KgpqajaDQDiTpMHjahVS7Z1X1PBF4Ks0aZtWndiuozDdRx+Oc1HEUijMhzI48xa4PiCJ0Wpgt1Cx4zTto4beVj+0lyvVf2lPxI8ecS6pZtgmaeMcp6zSgmdELLGb/6CmvXxXVKf8TznuINlM6B6CB/zGK/7afxtMybHbIiJCiIiAiIgf//Z",
  },
];

const Feeds = () => {
  return (
    <FlatList data={post} renderItem={({ item }) => <Post post={item} />} />
  );
};

export default Feeds;