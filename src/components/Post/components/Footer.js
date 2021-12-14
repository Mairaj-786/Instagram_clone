import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../../styles/Global";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Footer() {
  const [like, setLike] = React.useState(false);
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            {/* heart comment */}
            <TouchableOpacity onPress={() => setLike(!like)}>
              {/* change state onPress */}
              {like ? (
                <Ionicons name="heart" size={22} color="red" />
              ) : (
                <Ionicons name="heart-outline" size={22} color="black" />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("comment")}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={22}
                color="black"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("share")}>
              <Ionicons name="send-outline" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* liked by */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={{
              uri:
                "data:image/jpeg;base64,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",
            }}
            resizeMode="cover"
            style={{ width: 30, height: 30, borderRadius: 100 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 10,
            }}
          >
            <Text style={globalStyles.titleText}>
              Liked by <Text style={globalStyles.titleTextBold}>SRK </Text>
              <Text style={globalStyles.titleText}> and </Text>
              <Text style={globalStyles.titleTextBold}> others </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
