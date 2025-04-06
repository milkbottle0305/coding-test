#include <iostream>
#include <map>
#include <vector>
#include <string>
using namespace std;

int R, C, M;
map<string, vector<int>> sharks;
bool existSharkMap[100][100];

string getRowColString(int row, int col) {
    return to_string(row) + '-' + to_string(col);
}

pair<int, int> parseRowColString(const string& str) {
    size_t pos = str.find('-');
    int row = stoi(str.substr(0, pos));
    int col = stoi(str.substr(pos + 1));
    return {row, col};
}

pair<int, int> getNextPosDirection(int startRow, int startCol, int speed, int dir) {
    int newDir = dir, dist = 0, pos = 0;
    if(dir == 1 || dir == 2) {
        // 위/아래
        int boundary = R - 1 - startRow; 
        if(dir == 1) boundary = R - 1 - boundary; 
        dist = (dir == 1 ? (R - 1 - startRow) : startRow) + speed;
        // 이동 후 방향 결정
        newDir = ((dist / (R - 1)) % 2 == 0) ? dir : (dir == 1 ? 2 : 1);
        pos = (newDir == 1) 
            ? (R - 1 - (dist % (R - 1))) 
            : (dist % (R - 1));
        return {pos, newDir};
    } else {
        // 오른쪽/왼쪽
        int boundary = C - 1 - startCol; 
        if(dir == 4) boundary = C - 1 - boundary;
        dist = (dir == 4 ? (C - 1 - startCol) : startCol) + speed;
        newDir = ((dist / (C - 1)) % 2 == 0) ? dir : (dir == 3 ? 4 : 3);
        pos = (newDir == 3)
            ? (dist % (C - 1))
            : (C - 1 - (dist % (C - 1)));
        return {pos, newDir};
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> R >> C >> M;
    for(int i = 0; i < M; i++) {
        int row, col, speed, direction, size;
        cin >> row >> col >> speed >> direction >> size;
        string keyShark = getRowColString(row - 1, col - 1);
        sharks.insert({keyShark, {speed, direction, size}});
        existSharkMap[row - 1][col - 1] = true;
    }

    int answer = 0;
    for(int col = 0; col < C; col++) {
        for(int row = 0; row < R; row++) {
            if(existSharkMap[row][col]) {
                string keyShark = getRowColString(row, col);
                answer += sharks[keyShark][2];
                sharks.erase(keyShark);
                existSharkMap[row][col] = false;
                break;
            }
        }

        map<string, vector<int>> tempSharks;
        for(auto& sk : sharks) {
            auto [startRow, startCol] = parseRowColString(sk.first);
            int speed = sk.second[0];
            int direction = sk.second[1];
            int size = sk.second[2];

            auto [newPos, newDir] = getNextPosDirection(startRow, startCol, speed, direction);
            int newRow = (direction <= 2 ? newPos : startRow);
            int newCol = (direction <= 2 ? startCol : newPos);
            if(direction > 2) {
                newRow = (direction > 2 ? startRow : newPos);
                newCol = (direction > 2 ? newPos : startCol);
            }
            direction = newDir;

            string keyShark = getRowColString(newRow, newCol);
            if(tempSharks.find(keyShark) != tempSharks.end()) {
                if(tempSharks[keyShark][2] > size) {
                } else {
                    tempSharks[keyShark] = {speed, direction, size};
                }
            } else {
                tempSharks.insert({keyShark, {speed, direction, size}});
            }

            existSharkMap[startRow][startCol] = false;
        }

        for(auto& t : tempSharks) {
            auto [nr, nc] = parseRowColString(t.first);
            existSharkMap[nr][nc] = true;
        }
        sharks = tempSharks;
    }
    cout << answer << "\n";
    return 0;
}